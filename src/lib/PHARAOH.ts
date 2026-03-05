import { readContract, writeContract } from "@wagmi/core";
import BN from "bn.js";
import {
  PHARAOH_ROUTER_ADDRESS_V1,
  PHARAOH_ROUTER_ADDRESS_V2,
  PHARAOH_ROUTER_ABI,
  WAVAX_ADDRESS,
  PHARAOH_FACTORY_ADDRESS_V1,
  PHARAOH_FACTORY_ADDRESS_V2,
  PHARAOH_FACTORY_ABI,
} from "@/lib/constants";
import { web3Config } from "@/context/Web3Context";
import { waitForWagmiTxReceipt } from "./tx";

export type PharaohVersion = "v1" | "v2";

const DEADLINE_SECONDS = 300;

export function getRouterAddress(version: PharaohVersion): string {
  return version === "v1"
    ? PHARAOH_ROUTER_ADDRESS_V1
    : PHARAOH_ROUTER_ADDRESS_V2;
}

export function getFactoryAddress(version: PharaohVersion): string {
  return version === "v1"
    ? PHARAOH_FACTORY_ADDRESS_V1
    : PHARAOH_FACTORY_ADDRESS_V2;
}

export async function createSwapTransaction(
  accountAddress: string,
  tokenInAddress: string,
  tokenOutAddress: string,
  isFromExact: boolean,
  amountIn: BN,
  amountOut: BN,
  slippage: number,
  stable: boolean,
  supportFee: boolean,
  version: PharaohVersion = "v2"
): Promise<{
  success: boolean;
  txHash?: string;
  error?: unknown;
}> {
  const now = Math.floor(Date.now() / 1000);
  const deadline = now + DEADLINE_SECONDS;
  const routerAddress = getRouterAddress(version);

  try {
    let method: string;
    let args: any[];
    let value = undefined;

    if (isFromExact) {
      const amountOutMin = amountOut.muln(100 - slippage).divn(100);

      if (tokenInAddress === "0xAVAX") {
        method = supportFee
          ? "swapExactETHForTokensSupportingFeeOnTransferTokens"
          : "swapExactETHForTokens";
        args = [
          amountOutMin.toString(),
          [[WAVAX_ADDRESS, tokenOutAddress, stable]],
          accountAddress,
          deadline,
        ];
        value = amountIn.toString();
      } else if (tokenOutAddress === "0xAVAX") {
        method = supportFee
          ? "swapExactTokensForETHSupportingFeeOnTransferTokens"
          : "swapExactTokensForETH";
        args = [
          amountIn.toString(),
          "0",
          [[tokenInAddress, WAVAX_ADDRESS, stable]],
          accountAddress,
          deadline,
        ];
      } else {
        method = supportFee
          ? "swapExactTokensForTokensSupportingFeeOnTransferTokens"
          : "swapExactTokensForTokens";
        args = [
          amountIn.toString(),
          amountOutMin.toString(),
          [[tokenInAddress, tokenOutAddress, stable]],
          accountAddress,
          deadline,
        ];
      }
    } else {
      const amountInMax = amountIn.muln(100 + slippage).divn(100);

      if (tokenInAddress === "0xAVAX") {
        method = "swapETHForExactTokens";
        args = [
          amountOut.toString(),
          [[WAVAX_ADDRESS, tokenOutAddress, stable]],
          accountAddress,
          deadline,
        ];
        value = amountInMax.toString();
      } else if (tokenOutAddress === "0xAVAX") {
        method = "swapTokensForExactETH";
        args = [
          amountOut.toString(),
          amountInMax.toString(),
          [[tokenInAddress, WAVAX_ADDRESS, stable]],
          accountAddress,
          deadline,
        ];
      } else {
        method = "swapTokensForExactTokens";
        args = [
          amountOut.toString(),
          amountInMax.toString(),
          [[tokenInAddress, tokenOutAddress, stable]],
          accountAddress,
          deadline,
        ];
      }
    }

    const txHash = await writeContract(web3Config, {
      address: routerAddress as `0x${string}`,
      abi: PHARAOH_ROUTER_ABI,
      functionName: method,
      args,
      ...(value ? { value: BigInt(value) } : {}),
    });

    const receipt = await waitForWagmiTxReceipt(txHash);

    if (receipt.status === "success") {
      return { success: true, txHash };
    } else {
      return { success: false, txHash };
    }
  } catch (error) {
    console.error("Swap transaction error:", error);
    return { success: false, error };
  }
}

export const getAmountOut = async (
  tokenInAddress: string,
  tokenOutAddress: string,
  tokenInAmount: BN,
  version: PharaohVersion = "v2"
): Promise<{ amountOut: BN | null; stable: boolean }> => {
  let amountOut: BN | null = null;
  let stable = false;
  const routerAddress = getRouterAddress(version);

  try {
    const quoteResult = await readContract(web3Config, {
      address: routerAddress as `0x${string}`,
      abi: PHARAOH_ROUTER_ABI,
      functionName: "getAmountOut",
      args: [
        tokenInAmount.toString(),
        tokenInAddress.toString(),
        tokenOutAddress.toString(),
      ],
    });
    if (quoteResult && Array.isArray(quoteResult) && quoteResult.length > 0) {
      amountOut = new BN(quoteResult[0].toString());
      stable = Boolean(quoteResult[1]);
    } else {
      throw new Error("Error: getAmountOut() could not retrieve quote!");
    }
  } catch (error) {
    console.log(error);
  }

  return { amountOut, stable };
};

export const getPairAddressFor = async (
  tokenInAddress: string,
  tokenOutAddress: string,
  stable: boolean,
  version: PharaohVersion = "v2"
): Promise<string | null> => {
  const factoryAddress = getFactoryAddress(version);

  try {
    const pairContractAddress = await readContract(web3Config, {
      address: factoryAddress as `0x${string}`,
      abi: PHARAOH_FACTORY_ABI,
      functionName: "getPair",
      args: [tokenInAddress, tokenOutAddress, stable],
    });
    if (
      !pairContractAddress ||
      pairContractAddress === "0x0000000000000000000000000000000000000000"
    ) {
      return null;
    }
    return pairContractAddress.toString();
  } catch (error) {
    console.error("Error getting pair address:", error);
    return null;
  }
  return null;
};
