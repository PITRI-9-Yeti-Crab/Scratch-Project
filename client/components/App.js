import React from 'react';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';
import './components.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;