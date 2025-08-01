import { ConnectButton, ThemeToggle } from '@/components/shared';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className='topbar'>
                <NavLink to="/" className='logo'>
                    <div className='logo'>
                        <div className="rounded-md bg-ava-red p-2 h-8 w-8 flex items-center justify-center">
                            <img src="assets/Avalanche_Logomark_White.svg" className='' />
                        </div>
                        <span>Legacy Routers</span>
                    </div>
                </NavLink>
                <div className='topbar-links'>
                    <NavLink to="/LFJ" className='topbar-link'>LFJ</NavLink>
                    <NavLink to="/PHARAOH" className='topbar-link'>PHARAOH</NavLink>
                    <NavLink to="/Arena" className='topbar-link'>Arena</NavLink>
                    <NavLink to="/Pangolin" className='topbar-link'>Pangolin</NavLink>
                    <NavLink to="/Uniswap" className='topbar-link'>Uniswap</NavLink>
                    <NavLink to="/Blackhole" className='topbar-link'>Blackhole</NavLink>
                    <NavLink to="/VaporDEX" className='topbar-link'>VaporDEX</NavLink>
                </div>
                <div className='connect-and-theme-button-wrapper'>
                    <ThemeToggle />
                    <ConnectButton />
                </div>
            </div>
        </div>
    )
}

export default Topbar