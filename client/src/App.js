import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage';
import ProductPage from './components/pages/productpage'
import LoginPage from './components/pages/login/login'
import SignupPage from './components/pages/Signup/Signup'
import Navbar from './components/UI/navbar'
import React, { useState, useEffect } from 'react'


function App() {
    

  const [user,SetUser] = useState(null)

  const SaveAuthenicatedUser = (user) =>{

      SetUser(user)

  }
  const LogOutUSer = () =>{
      SetUser(null)
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar user = {user} Logout = {LogOutUSer}></Navbar>
        <Switch>

          <Route path ='/' render={() =><LoginPage  SaveUser ={SaveAuthenicatedUser} />} exact></Route>
          <Route path ='/signup' render = {() => <SignupPage ></SignupPage>} exact></Route>
          <Route path='/homepage' render={() => <HomePage user={user}></HomePage>}  exact/>
          <Route path ='/product/:id' render={() =><ProductPage user={user}></ProductPage>} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
