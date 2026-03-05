import React from 'react'
import AddressCopyLink from './AddressCopyLink';
import { ExternalLink } from "lucide-react";

interface SwapInfoProps {
    routerAddress: string;
    pairAddress?: string;
    includeType?: boolean;
    pairType?: string;
    mainSiteLink: string;
}

const SwapInfo: React.FC<SwapInfoProps> = ({
    routerAddress,
    pairAddress,
    includeType = false,
    pairType = '',
    mainSiteLink = ''
}) => {

    return (
        <div className="flex flex-col w-full mt-4 info-text">
            <div className='flex flex-row justify-between'>
                <span className='no-select'>Router:</span>
                <AddressCopyLink address={routerAddress} copyButton={true} externalLink={true} />
            </div>
            <div className='flex flex-row justify-between'>
                <span className='no-select'>Pair:</span>
                {pairAddress !== undefined ? (
                    <AddressCopyLink address={pairAddress} copyButton={true} externalLink={true} />
                ) : (
                    <span className='text-red-500 mr-7'>Pair Not Found</span>
                )}
            </div>
            {includeType && (
                <div className='flex flex-row justify-between'>
                    <span className='no-select'>Type:</span>
                    <span className='pointer-events-none mr-7'>{pairType}</span>
                </div>
            )}
            <div className='info-links'>
                <div></div>
                <div className='flex flex-row gap-1'>
                    {pairAddress !== undefined && (
                        <>
                            <a href={"https://dexscreener.com/avalanche/" + pairAddress.toLowerCase()} target='_blank' title="Dexscreener">
                                <img src="/assets/DexscreenerLogo.svg" className='h-5 w-5' alt="Dexscreener" />
                            </a>
                            <a href={"https://www.dextools.io/app/en/avalanche/pair-explorer/" + pairAddress.toLowerCase()} target='_blank' rel="noopener noreferrer" title="Dex Tools">
                                <img src="/assets/DextoolsLogo.svg" className='h-5 w-5' alt="Dex Tools" />
                            </a>
                        </>
                    )}
                    <a href={mainSiteLink} target='_blank' title="Current Dex Router's Main Website">
                        <ExternalLink className='h-5 w-5' color="#919191" />
                    </a>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default SwapInfo