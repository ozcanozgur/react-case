import React from 'react'
import './ItemType.css'

function ItemType(props) {
    return (
        <button className={props.isActive ? 'ActiveItemType' : 'ItemType'} onClick={() => props.onClick(props.type)}><p>{props.type}</p></button>
    )
}

export default ItemType;