import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/about' exact component = {About}/>
        <Route path='/portfolio' exact component = {Portfolio}/>
        <Route path='/projects' exact component = {Projects}/>
        <Route path='/blogs' exact component = {Blogs}/>
      </Switch>
    </Router>
  )
}

export default App;
 