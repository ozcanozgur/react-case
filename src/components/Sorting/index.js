import React, { useState } from 'react'
import './Sorting.css'

function Sorting() {

    const [selectedOption, setSelectedOption] = useState("option1");

    return (
        <div className="SortingContainer">
            <p>Sorting</p>
            <div className='RadioBox'>
                <form>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            Price Low to high
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            Price high to low
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={(e) => setSelectedOption(e.target.value)} />
                            New to old
                        </label>
                    </div>
                    <div className="Radio">
                        <label>
                            <input type="radio" value="option4"
                                checked={selectedOption === 'option4'}
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