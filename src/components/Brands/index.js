import React, { useState } from 'react'
import './Brands.css'

import { useDispatch, useSelector } from "react-redux";
import { setSelectedBrands, itemsSelector } from "../../features/items";

function Brands() {

    const dispatch = useDispatch();

    const { brands, selectedBrands } = useSelector(itemsSelector);

    const [inputValue, setInputValue] = useState("");


    const _onChange = (item, index) => {
        const findIdx = selectedBrands.indexOf(item);
        console.log(index, item)
        if (findIdx > -1) {
            dispatch(setSelectedBrands(selectedBrands.filter(a => a !== item)));
        }
        else if (index == 0) {
            dispatch(setSelectedBrands([item]));
        }
        else {
            dispatch(setSelectedBrands([...selectedBrands, item]))
        }
    }

    const checkBoxes = () => {
        return Object.keys(brands).filter(brand => brand === '' || brand.includes(inputValue))
            .map((item, index) => (
                <div className='checkbox-wrapper' key={item}>
                    <label>
                        <input type="checkbox" checked={selectedBrands.includes(item)} onChange={() => _onChange(item, index)} />
                        <span>{item} ({brands[item]})</span>
                    </label>
                </div>
            ))
    }


    return (
        <div className="BrandsContainer">
            <p>Brands</p>
            <div className='BrandsBox'>
                <div className="search">
                    <input
                        type="text"
                        className='SearchInput'
                        value={inputValue}
                        placeholder="Search brand"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="CheckBoxContainer">
                    {checkBoxes()}
                </div>
            </div>
        </div>
    )
}

export default Brands;