import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

const ShoppingCartSummary = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }}>
      <h2>Shopping Cart Summary</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{`${item.name} - Quantity: ${item.quantity} - Price: ${formatCurrency(item.price)}`}</li>
        ))}
      </ul>
      <strong>Total: {formatCurrency(total)}</strong>
    </div>
  );
};

export default ShoppingCartSummary;
