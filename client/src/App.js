import React from 'react'
import './App.css';
import { Route } from 'react-router';
import User from './components/pages/homepage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path='/' component={User} />
      </BrowserRouter>
    </div>
  );
}

export default App;
