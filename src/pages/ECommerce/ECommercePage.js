import React from 'react';
import ProductRating from './ProductRating';
import ShoppingCartSummary from './ShoppingCartSummary';

const ECommercePage = () => {
  const items = [
    { name: 'Product 1', quantity: 2, price: 9.99 },
    { name: 'Product 2', quantity: 1, price: 19.99 },
  ];

  return (
    <div>
      <h1>E-Commerce Features</h1>
      <ProductRating productName="Product 1" />
      <ShoppingCartSummary items={items} />
    </div>
  );
};

export default ECommercePage;
