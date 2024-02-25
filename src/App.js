import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedbackPage from './pages/UserEngagement/FeedbackPage';
import ECommercePage from './pages/ECommerce/ECommercePage';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/feedback" style={{ marginRight: '10px' }}>User Feedback</Link>
          <Link to="/ecommerce">E-Commerce</Link>
        </nav>
        <Routes>
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/ecommerce" element={<ECommercePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;