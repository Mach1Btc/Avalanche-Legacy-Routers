import { NavLink } from 'react-router-dom';

const links = [
    { to: '/LFJ', src: '/assets/icons/Joe.png', alt: 'LFJ' },
    { to: '/PHARAOH', src: '/assets/icons/Pharaoh.svg', alt: 'PHARAOH' },
    { to: '/Arena', src: '/assets/icons/Arena.svg', alt: 'Arena' },
    { to: '/Pangolin', src: '/assets/icons/Pangolin.svg', alt: 'Pangolin' },
    { to: '/Uniswap', src: '/assets/icons/Uniswap.svg', alt: 'Uniswap' },
    { to: '/Blackhole', src: '/assets/icons/Blackhole.svg', alt: 'Blackhole' },
    { to: '/VaporDEX', src: '/assets/icons/VaporDEX.svg', alt: 'VaporDEX' },
];

const RouterSelecter = () => {
    return (
        <>
            {/* Small screens: 2 rows */}
            <div className="max-w-[600px] mx-auto mt-4 xl:mt-0 flex flex-col gap-3 md:hidden xl:hidden">
                {/* Top row - 4 icons centered */}
                <div className="flex justify-center gap-4">
                    {links.slice(0, 4).map(({ to, src, alt }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                            }
                        >
                            <img src={src} alt={alt} className="h-8 w-8" />
                        </NavLink>
                    ))}
                </div>

                {/* Bottom row - 3 icons centered */}
                <div className="flex justify-center gap-4">
                    {links.slice(4).map(({ to, src, alt }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                            }
                        >
                            <img src={src} alt={alt} className="h-8 w-8" />
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Medium and up: 1 row with all 7 icons centered */}
            <div className="max-w-[600px] mx-auto mt-4 xl:mt-0 hidden md:flex justify-center gap-4 xl:hidden">
                {links.map(({ to, src, alt }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                        }
                    >
                        <img src={src} alt={alt} className="h-8 w-8" />
                    </NavLink>
                ))}
            </div>
        </>
    );
};

export default RouterSelecter;
