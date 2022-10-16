import React, { useState } from 'react'
import './Basket.css'
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';

import { useSelector, useDispatch } from "react-redux";
import { addBasket, removeBasket, itemsSelector } from "../../features/items";

function Basket() {

    const dispatch = useDispatch();
    const { basketItems, totalPrice } = useSelector(itemsSelector);

    const renderBasketItems = () => {
        var result = (<p>Basket Empty, Please Add Product</p>);

        if (basketItems.length > 0) {
            return basketItems.map((item) => (<>
                <div className='BasketItem'>
                    <div className='ItemInfo'>
                        <p className='ItemName'>{item.name}</p>
                        <p className='ItemPrice'>₺{item.price}</p>
                    </div>
                    <div className='ItemCounter'>
                        <button onClick={() => dispatch(removeBasket(item))}><img src={minus} /></button>
                        <div>{item.qty}</div>
                        <button onClick={() => dispatch(addBasket(item))}><img src={plus} /></button>
                    </div>
                </div>
                <div className='Seperator'></div>
            </>))
        }
        return result;



    }
    return (
        <div className="BasketContainer">
            {renderBasketItems()}
            <div className='TotalPrice'>
                <div> <p className='ItemPrice'>₺{totalPrice.toFixed(2)}</p></div>
            </div>
        </div>
    )
}

export default Basket;