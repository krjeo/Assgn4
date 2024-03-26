import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span
          className="product-name"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          {product.name}
        </span>
        {showDetails && (
          <div className="details-popup">
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        )}
        <p className="product-price">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
