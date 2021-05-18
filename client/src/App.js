import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage';
import ProductsPage from './components/pages/Products/products'
import ProductPage from './components/pages/product/productpage'
import LoginPage from './components/pages/login/login'
import SignupPage from './components/pages/Signup/Signup'
import ErrorPage from './components/pages/Error/404Page/Page404'
import CartPage from './components/pages/Cart/Cart'
import Navbar from './components/UI/navbar'
import React, { useState } from 'react'


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
          <Route path ='/products' render={() =><ProductsPage></ProductsPage>} exact></Route>
          <Route path ='/cart/:id?' render={() =><CartPage></CartPage>} exact></Route>
          <Route path ='/' render={() =><ErrorPage></ErrorPage>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

