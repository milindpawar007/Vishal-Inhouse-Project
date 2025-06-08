import React from 'react';
import ProductList from './ProductList';
import './Product.css';

const Product = () => {
    return (
        <details className="collapsible-section" open>
            <summary className="collapsible-summary group">
                <span>Products</span>
                <svg
                    className="chevron-icon group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </summary>

            <div className="collapsible-content">
                <ProductList />
            </div>
        </details>
    );
};

export default Product;
