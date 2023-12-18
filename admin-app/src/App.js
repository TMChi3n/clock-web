import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import DetailClock from './Components/DetailClock';
import ListClock from './Components/ListClock';
import AddClock from './Components/AddClock';
import EditClock from './Components/EditClock';
import Account from './Components/Login';
import Register from './Components/Register';

function Home() {
  return (
    <div>
      <Account />
    </div>
  );
}

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListClock />} />
          <Route path="/add" element={<AddClock />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditClock />} />
          <Route path="/get/:id" element={<DetailClock />} />
        </Routes>
    </Router>
  );
}

export default App;
