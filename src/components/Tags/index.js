import React, { useState } from 'react'
import './Tags.css'

import { useSelector, useDispatch } from "react-redux";
import { itemsSelector, setSelectedTags } from "../../features/items";

function Tags() {

    const dispatch = useDispatch();

    const { tags, selectedTags } = useSelector(itemsSelector);

    const [inputValue, setInputValue] = useState("");

    const _onChange = (item, index) => {
        const findIdx = selectedTags.indexOf(item);
        if (findIdx > -1) {
            dispatch(setSelectedTags(selectedTags.filter(a => a !== item)))
        }
        else if (index == 0) {
            dispatch(setSelectedTags([item]));
        }
        else {
            dispatch(setSelectedTags([...selectedTags, item]))
        }
    }

    const checkBoxes = () => {
        return Object.keys(tags).filter(tag => tag === '' || tag.includes(inputValue))
            .map((item, index) => (
                <div className='checkbox-wrapper' key={item}>
                    <label>
                        <input type="checkbox" checked={selectedTags.includes(item)} onChange={() => _onChange(item, index)} />
                        <span>{item} ({tags[item]})</span>
                    </label>
                </div>
            ))
    }

    return (
        <div className="TagsContainer">
            <p>Tags</p>
            <div className='TagsBox'>
                <div className="search">
                    <input
                        type="text"
                        className='SearchInput'
                        placeholder='Search Tag'
                        value={inputValue}
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

export default Tags;