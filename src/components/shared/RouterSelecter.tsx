import { NavLink } from 'react-router-dom';

const links = [
    { to: '/LFJ', src: '/assets/icons/Joe.png', alt: 'LFJ' },
    { to: '/PHARAOH', src: '/assets/icons/Pharaoh.svg', alt: 'PHARAOH' },
    { to: '/Arena', src: '/assets/icons/Arena.svg', alt: 'Arena' },
    { to: '/Pangolin', src: '/assets/icons/Pangolin.svg', alt: 'Pangolin' },
    { to: '/Uniswap', src: '/assets/icons/Uniswap.svg', alt: 'Uniswap' },
    { to: '/Blackhole', src: '/assets/icons/Blackhole.svg', alt: 'Blackhole', isMask: true },
    { to: '/VaporDEX', src: '/assets/icons/VaporDEX.svg', alt: 'VaporDEX' },
];

const renderIcon = ({ src, alt, isMask }: { src: string; alt: string; isMask?: boolean }) => {
    if (isMask) {
        return (
            <div
                className="h-8 w-8 bg-black dark:bg-blackhole-yellow"
                style={{
                    maskImage: `url(${src})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                }}
            />
        );
    }
    return <img src={src} alt={alt} className="h-8 w-8" />;
};

const RouterSelecter = () => {
    return (
        <>
            {/* Small screens: 2 rows */}
            <div className="max-w-[600px] mx-auto mt-4 xl:mt-0 flex flex-col gap-3 md:hidden xl:hidden">
                {/* Top row - 4 icons centered */}
                <div className="flex justify-center gap-4">
                    {links.slice(0, 4).map(({ to, src, alt, isMask }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                            }
                        >
                            {renderIcon({ src, alt, isMask })}
                        </NavLink>
                    ))}
                </div>

                {/* Bottom row - 3 icons centered */}
                <div className="flex justify-center gap-4">
                    {links.slice(4).map(({ to, src, alt, isMask }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                            }
                        >
                            {renderIcon({ src, alt, isMask })}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Medium and up: 1 row with all 7 icons centered */}
            <div className="max-w-[600px] mx-auto mt-4 xl:mt-0 hidden md:flex justify-center gap-4 xl:hidden">
                {links.map(({ to, src, alt, isMask }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            (isActive ? '' : 'opacity-50 scale-75') + ' transition-transform'
                        }
                    >
                        {renderIcon({ src, alt, isMask })}
                    </NavLink>
                ))}
            </div>
        </>
    );
};

export default RouterSelecter;