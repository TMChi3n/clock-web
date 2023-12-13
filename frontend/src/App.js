import React from 'react';
import { BrowserRouter as Router, Routing, Route, Link, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProduct from './components/ListProduct';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ViewProduct from './components/ViewProduct';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={ListProduct}/>
          <Route exact path = "/add" component={AddProduct}/>
          <Route exact path = "/edit/:id" component={EditProduct}/>
          <Route exact path = "/get/:id" component={ViewProduct}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
