import React, { useEffect, useState } from 'react'
import './Brands.css'
import checkbox from '../../checkbox.svg';
function Brands() {

    const [inputValue, setInputValue] = useState("");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [categories, setCategories] = useState({
        "brands": [
            { id: 1, value: "Angular" },
            { id: 2, value: "React" },
            { id: 3, value: "PHP" },
            { id: 4, value: "Laravel" },
            { id: 5, value: "Laravel" },
            { id: 6, value: "React" },
            { id: 7, value: "PHP" },
            { id: 8, value: "Laravel" },
        ]
    });

    const _onChange = (id) => {
        const findIdx = selectedCheckboxes.indexOf(id);
        if (findIdx > -1) {
            setSelectedCheckboxes(selectedCheckboxes.filter(a => a !== id));
        } else {
            setSelectedCheckboxes((prevState) => [...prevState, id])
        }
    }

    const checkBoxes = () => {
        return categories.brands.filter(item => item.value === '' || item.value.includes(inputValue))
            .map((item) => (
                <div className='checkbox-wrapper'>
                    <label>
                        <input type="checkbox" checked={selectedCheckboxes.includes(item.id)} onChange={() => _onChange(item.id)} />
                        <span>{item.value}</span>
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