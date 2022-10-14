import React, { useState } from 'react'
import './Search.css'

function Search() {

    const [inputValue, setInputValue] = useState("test");

    return (
        <div className="SearchBoxContainer">
            <p>Tags</p>
            <div className='SearchBox'>
                <div className="search">
                    <input
                        type="text"
                        className='SearchInput'
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

export default Search;