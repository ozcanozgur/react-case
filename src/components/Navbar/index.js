import React from 'react'
import './Navbar.css'
import logo from '../../Logo.svg';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="basket">
                <p>Test</p>
            </div>
        </nav>
    )
}

export default Navbar;