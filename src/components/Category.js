import React, { useState } from 'react';
import './Category.css';
import { ProductCard } from './ProductCard';

export const Category = ({ category, image, products }) => {

    const [showProducts, setShowProducts] = useState(false);

    const handleCategoryClick = () => {
        setShowProducts(!showProducts);
    };

    return (
        <div className="category">
            <img src={image} alt={category} onClick={handleCategoryClick} style={{ cursor: 'pointer' }} />
            <h2>{category}</h2>
            {showProducts && (
                <div className="productList">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};
