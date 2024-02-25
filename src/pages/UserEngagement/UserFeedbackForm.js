import React, { useState } from 'react';
import Button from '../../components/Button';

const UserFeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <h2>User Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback..."
        rows="4"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <Button>Submit Feedback</Button>
    </form>
  );
};

export default UserFeedbackForm;
