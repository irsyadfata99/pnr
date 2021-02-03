import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Index'
import Company from './Pages/Company';
import Product from './Pages/Product';
import Contact from './Pages/Contact-us';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Company" component={Company} />
        <Route path="/Product" component={Product} />
        <Route path="/Contact-us" component={Contact} />
      </Switch>
    </Router>
  )
}

export default App;
