import React from 'react';
import ProductCard from './ProductCard';

const productData = [
  {
    icon: <img src="/icons/codax.svg" alt="CODAx" />,
    title: 'CODAx',
    description: 'Analyze IP/SoC designs to detect bad coding styles against security vulnerabilities',
  },
  {
    icon: <img src="/icons/examples.svg" alt="Examples" />,
    title: 'Examples',
    description: 'View and analyze open-source designs for security violations',
  },
  {
    icon: <img src="/icons/support.svg" alt="Support" />,
    title: 'Support, Documentation, Submit Ticket',
    description: 'Submit report/ticket and view documentation',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
