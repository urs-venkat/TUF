import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import FetchRandomQuestions from './components/FetchRandomQuestions';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/questions">Flash Cards</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/questions" element={<FetchRandomQuestions />} />
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  </Router>
);

export default App;
