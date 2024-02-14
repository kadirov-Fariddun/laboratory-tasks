import React,{useState} from 'react';
import logo from '../images/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [menuActive,setMenuActive] = useState('');
  return (
    <>
    <div className="head">
        {/* <!-- burger btn --> */}
            <button class="burger-btn" onClick={()=>menuActive!='active'?setMenuActive('active'):''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
            </button>
            {/* <!-- burger btn end --> */}
            <div class="container">
                {/* <!-- header --> */}
                <header class={`header ${menuActive}`}>
                    <button class="menu-close-btn" onClick={()=>menuActive!=''?setMenuActive(''):''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                    </button>
                    {/* <!-- logotype --> */}
                    <div class="logo"><NavLink to="/"><img src={logo} alt="logotype"/></NavLink></div>
                    {/* <!-- logotype end --> */}
                    {/* <!-- navbar --> */}
                    <nav class="navbar">
                        <NavLink to="/" class="navbar__link" style={{color:'#fff'}}>Home</NavLink>
                        <NavLink to="/pricing" class="navbar__link" style={{color:'#fff'}}>Pricing</NavLink>
                        <NavLink to="/contact" class="navbar__link navbar__link-btn" style={{color:'#fff'}}>
                            <span></span>
                            <span>Contact us</span>
                        </NavLink>
                    </nav>
                    {/* <!-- navbar end --> */}
                </header>
                {/* <!-- header end --> */}
            </div>
        </div>
    </>
  )
}
