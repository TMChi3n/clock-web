import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListClock from './Components/ListClock';
import DetailClock from "./Components/DetailClock";
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<ListClock />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/get/:id" element={<DetailClock />}/>
        </Routes>

    </Router>

  );
}

export default App;
