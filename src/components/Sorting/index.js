import React, { useState } from 'react'
import './Sorting.css'

import { useDispatch, useSelector } from "react-redux";
import { setSorting, itemsSelector } from "../../features/items";

function Sorting() {

    const dispatch = useDispatch();
    const { sortingBy } = useSelector(itemsSelector);

    const setSelectedOption = (e) => {
        dispatch(setSorting(e))
    }

    return (
        <div className="SortingContainer">
            <p>Sorting</p>
            <div className='RadioBox'>
                <form>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="priceLowToHigh"
                                checked={sortingBy === 'priceLowToHigh'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            Price Low to high
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="priceHighToLow"
                                checked={sortingBy === 'priceHighToLow'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            Price high to low
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="newToOld"
                                checked={sortingBy === 'newToOld'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            New to old
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="oldToNow"
                                checked={sortingBy === 'oldToNow'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            Old to new
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Sorting;