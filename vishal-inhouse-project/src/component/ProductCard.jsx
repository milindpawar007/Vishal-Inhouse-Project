import React from 'react';
import './ProductCard.css'; // keep filename lowercase for consistency

const ProductCard = ({ icon, title, description }) => {
    return (
        <div className="product-card">
            <div className="product-icon">{icon}</div>
            <div className="product-content">
                <p className="product-title">{title}</p>
                <p className="product-description">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
