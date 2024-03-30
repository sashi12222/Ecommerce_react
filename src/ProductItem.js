// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-company">{product.company}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
