import React from 'react'
import './Product.css'

function Product(props) {
    const { name, id, price } = props;
    return (
        <div className="ProductBox">
            <div className='ImageBox'>
                <div className='InnerImageBox'>
                </div>
            </div>
            <div className='Salary'>
                ₺ <div className='Price'>{price}</div>
            </div>
            <div className='Title'> {name}</div>
            <div className='AddButton'>Add</div>
        </div>
    )
}

export default Product;