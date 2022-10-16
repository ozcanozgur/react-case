import React from 'react'
import Product from '../../../components/Product';
import Tag from '../../../components/Tag';
import './ProductConteiner.css';

function MainConteiner(props) {

    const { error, loading, startIndex, endIndex, items } = props

    const renderItems = () => {
        var result = null;

        if (loading) return <strong>Loading please wait...</strong>;

        if (error) return <strong>Items not available at this time</strong>;

        if (items.length > 0) {
            return items.slice(startIndex, endIndex + 1).map((item, index) => <Product key={index} item={item} />);
        }
        return result;
    };

    return (
        <div className="ProductContainer">
            <div>
                <p>Products</p>
            </div>
            <div className='TagContainer'>
                <Tag />
                <Tag />
            </div>
            <div className='ProductContentContainer'>
                {renderItems()}
            </div>
        </div>
    )
}

export default MainConteiner;