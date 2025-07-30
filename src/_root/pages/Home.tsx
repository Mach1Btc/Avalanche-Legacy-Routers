import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start h-full p-8 pb-16">
            <div className="flex flex-col gap-8 mt-10 sm:mt-20">
                {/* LFJ Button */}
                <Link
                    to="/LFJ"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/LFGLogo.png"
                        alt="Use LFJ v1"
                        className="w-96 h-48 object-contain p-1 group-hover:brightness-110 transition-all duration-300 relative z-10 bg-lfj-purple"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-35 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use LFJ v1
                        </span>
                    </div>
                </Link>

                {/* PHARAOH Button */}
                <Link
                    to="/PHARAOH"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/PharaohLogo.png"
                        alt="Use PHARAOH v1"
                        className="w-96 h-48 object-cover group-hover:brightness-110 transition-all duration-300 relative z-10 bg-black"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use PHARAOH v1
                        </span>
                    </div>
                </Link>

                {/* Arena Button */}
                <Link
                    to="/Arena"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/ArenaLogo.svg"
                        alt="Use Arena.Trade v1"
                        className="w-96 h-48 object-contain p-4 group-hover:brightness-110 transition-all duration-300 relative z-10 bg-arena-orange"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-35 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use Arena.Trade v1
                        </span>
                    </div>
                </Link>

                {/* Pangolin Button */}
                <Link
                    to="/Pangolin"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/PangolinLogo.svg"
                        alt="Use Pangolin v2"
                        className="w-96 h-48 object-contain p-2 group-hover:brightness-110 transition-all duration-300 relative z-10 bg-pangolin-gray"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use Pangolin v2
                        </span>
                    </div>
                </Link>

                {/* Uniswap Button */}
                <Link
                    to="/Uniswap"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/UniswapLogo.png"
                        alt="Use Uniswap v2"
                        className="w-96 h-48 object-cover group-hover:brightness-110 transition-all duration-300 relative z-10 bg-uniswap-purple"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use Uniswap v2
                        </span>
                    </div>
                </Link>

                {/* Blackhole Button */}
                <Link
                    to="/Blackhole"
                    className="group home-display-card"
                >
                    <img
                        src="/assets/BlackholeLogo.png"
                        alt="Use Blackhole v1"
                        className="w-96 h-48 object-cover group-hover:brightness-110 transition-all duration-300 relative z-10 bg-blackhole-black"
                    />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"></div>
                    {/* Text overlay - separate from background */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use Blackhole v1
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Home;