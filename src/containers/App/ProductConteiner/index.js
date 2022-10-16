import React from 'react'
import Product from '../../../components/Product';
import ItemType from '../../../components/ItemType';
import './ProductConteiner.css';

import { useSelector, useDispatch } from "react-redux";
import { setActiveItemType, itemsSelector } from "../../../features/items";

function MainConteiner(props) {

    const { error, loading, startIndex, endIndex, items } = props

    const dispatch = useDispatch();

    const { activeItemType } = useSelector(itemsSelector);

    const handleClick = (clickedItem) => {
        dispatch(setActiveItemType(clickedItem))
    }

    const renderItems = () => {
        var result = null;

        if (loading) return <strong>Loading please wait...</strong>;

        if (error) return <strong>Items not available at this time</strong>;

        if (items.length > 0) {
            return items.slice(startIndex, endIndex + 1).map((item, index) => <Product key={index} item={item} />);
        }
        return result;
    };

    const renderItemTypes = () => {
        let itemTypes = ["mug", "shirt"]
        return itemTypes.map((itemType) => <ItemType isActive={activeItemType === itemType} type={itemType} onClick={(clickedItem) => handleClick(clickedItem)} />)
    };

    return (
        <div className="ProductContainer">
            <div>
                <p>Products</p>
            </div>
            <div className='ItemTypeContainer'>
                {renderItemTypes()}
            </div>
            <div className='ProductContentContainer'>
                {renderItems()}
            </div>
        </div>
    )
}

export default MainConteiner;