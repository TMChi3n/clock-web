import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListClock from './Components/ListClock';
import DetailClock from "./Components/DetailClock";
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {/* Add other navigation links if needed */}
          </ul>
        </nav>
      <div>

        <Routes>
          
          <Route path="/list" element={<ListClock />}/>
          <Route path="/get/:id" element={<DetailClock />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>

      </div>

    </Router>

  );
}

export default App;
