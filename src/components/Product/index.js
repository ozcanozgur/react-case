import React from 'react'
import './Product.css'

import { useDispatch } from "react-redux";
import { addBasket } from "../../features/items";


function Product(props) {
    const { item } = props;

    const dispatch = useDispatch();

    return (
        <div className="ProductBox">
            <div className='ImageBox'>
                <div className='InnerImageBox'>
                    <img src='https://picsum.photos/92'></img>
                </div>
            </div>
            <div className='Salary'>
                ₺ <div className='Price'>{item.price}</div>
            </div>
            <div className='Title'> {item.name}</div>
            <div className='Add'><button onClick={() => dispatch(addBasket(item))} > Add </button></div>
        </div>
    )
}

export default Product;