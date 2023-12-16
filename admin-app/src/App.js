import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import DetailClock from './Components/DetailClock';
import ListClock from './Components/ListClock';
import AddClock from './Components/AddClock';
import EditClock from './Components/EditClock';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* Add other navigation links if needed */}
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<ListClock />} />
          <Route path="/add" element={<AddClock />} />
          <Route path="/edit/:id" element={<EditClock />} />
          <Route path="/get/:id" element={<DetailClock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

