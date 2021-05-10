import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/homepage';
import ProductPage from './components/pages/productpage'
import LoginPage from './components/pages/login/login'
import Navbar from './components/UI/navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path='/' component={HomePage}  exact/>
        <Route path ='/product/:id' component={ProductPage} exact></Route>
        <Route path ='/login' component={LoginPage} exact></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
