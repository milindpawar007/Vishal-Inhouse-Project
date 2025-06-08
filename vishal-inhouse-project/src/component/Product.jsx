import React from 'react';
import ProductList from './ProductList';
import './Product.css';
const Product = () => {
    return (
        <section className="product-content">
            <h2 className="text-xl font-bold mb-3">Products</h2>
            <ProductList />
        </section>
    );
};

export default Product;
