import React from 'react';
// import colors from '../colors';
import LycheeLogo from '../LycheeLogo.png';

const NavBar = () => {
    return (
        <nav 
            className="navbar bg-body-tertiary position-sticky top-0">
            <div 
                className="container">
                <a 
                    className="navbar-brand" 
                    href="/">
                    <img
                        src={LycheeLogo} 
                        alt="Lychee Logo"
                        width="50" 
                        height="50" 
                        className="d-inline-block align-text-top" /> 
                </a>
            </div>
        </nav>
    );
};

export default NavBar;