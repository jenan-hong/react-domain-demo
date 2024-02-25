import React, { useState } from 'react';
import Button from '../../components/Button';

const ProductRating = ({ productName }) => {
  const [rating, setRating] = useState('');

  const submitRating = () => {
    alert(`${productName} rated with ${rating} star(s)!`);
    setRating('');
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Rate {productName}</h2>
      <select value={rating} onChange={(e) => setRating(e.target.value)} style={{ marginRight: '10px' }}>
        <option value="">Select rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <Button onClick={submitRating}>Submit Rating</Button>
    </div>
  );
};

export default ProductRating;
