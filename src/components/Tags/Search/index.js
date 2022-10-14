import React, { useState } from 'react'
import './Tags.css'

function Tags() {

    const [inputValue, setInputValue] = useState("");

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
                <div className="checkBoxContainer">
                    <input type="checkbox" checked="" />
                    <label >One</label>
                </div>
                <div className="checkBoxContainer">
                    <input type="checkbox" checked="" />
                    <label >One</label>
                </div>
                <div className="checkBoxContainer">
                    <input type="checkbox" checked="" />
                    <label >One</label>
                </div>
                <div className="checkBoxContainer">
                    <input type="checkbox" checked="" />
                    <label >One</label>
                </div>
            </div>
        </div>
    )
}

export default Tags;