import React from 'react'
import Brands from '../../../components/Brands';
import Sorting from '../../../components/Sorting';
import Tags from '../../../components/Tags/Search';
import './LeftBar.css'

function LeftSideBar() {
    return (
        <div className="LeftSideBar">
            <Sorting />
            <Brands />
            <Tags />
        </div>
    )
}

export default LeftSideBar;