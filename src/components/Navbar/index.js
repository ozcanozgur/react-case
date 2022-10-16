import React from 'react'
import './Navbar.css'
import logo from '../../images/Logo.svg';
import navbarBasketIcon from '../../images/navbarBasketIcon.svg'

import { useSelector } from "react-redux";
import { itemsSelector } from "../../features/items";


function Navbar() {

    const { totalPrice } = useSelector(itemsSelector);

    return (
        <nav>
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="NavBarBasket">
                <img src={navbarBasketIcon} alt="basket" />
                <p>₺{totalPrice.toFixed(2)}</p>
            </div>
        </nav>
    )
}

export default Navbar;