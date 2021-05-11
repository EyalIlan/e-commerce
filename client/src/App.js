import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage';
import ProductPage from './components/pages/productpage'
import LoginPage from './components/pages/login/login'
import SignupPage from './components/pages/Signup/Signup'
import Navbar from './components/UI/navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>

          <Route path ='/' component={LoginPage} exact></Route>
          <Route path ='/signup' component = {SignupPage} exact></Route>
          <Route path='/homepage' component={HomePage}  exact/>
          <Route path ='/product/:id' component={ProductPage} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
