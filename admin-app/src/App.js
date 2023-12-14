import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailClock from './Components/DetailClock';
import ListClock from './Components/ListClock';
import AddClock from './Components/AddClock';
import EditClock from './Components/EditClock';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={ListClock} />
          <Route exact path="/add" Component={AddClock} />
          <Route exact path="/get/:id" Component={DetailClock} />
          <Route exact path="/edit/:id" Component={EditClock} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
