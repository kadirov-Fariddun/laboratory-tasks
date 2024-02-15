import React from 'react';
import logo from './images/Logo.png';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <>
    <div className="header-container">
        <div className="container">
        {/* // <!-- header --> */}
        <header class="header">
            <button class="menu-close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
            </button>
            {/* <!-- logotype --> */}
            <div class="logo"><NavLink to='/'><img src={logo} alt="logotype"/></NavLink></div>
            {/* <!-- logotype end --> */}
            {/* <!-- navbar --> */}
            <nav class="navbar">
                <NavLink to='/' href="#" class="navbar__link">Home</NavLink>
                <NavLink to='/pricing' class="navbar__link">Pricing</NavLink>
                <NavLink to="/contact" class="navbar__link navbar__link-btn">
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
