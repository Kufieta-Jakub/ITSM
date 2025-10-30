import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; 
import './css/index.css';
import DashBoard from './Pages/DashBoard';
import Tickets from './Pages/Tickets';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/ServiceDesk/dashboard" element={<DashBoard/>} />
        <Route path="/ServiceDesk/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


