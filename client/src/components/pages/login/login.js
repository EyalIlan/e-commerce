import React, { useState } from 'react'
import Axios from 'axios'
import {useHistory,Link} from 'react-router-dom'
import './login.css'


// http://4.bp.blogspot.com/-AXsm1sFhq5o/TsSxgHcXzrI/AAAAAAAADn0/0Vmq9IvoiJg/s1600/sport-desktop-wallpapers-photo-images-31.jpg

export default function Login({SaveUser}) {
  
  const [username,SetUserName] = useState('')
  const [password,SetPassword] = useState('')


  let history = useHistory()

  const LoginDataHandler = (e) =>{

    if(e.target.name === 'username'){
       SetUserName(e.target.value)
    }else{
      SetPassword(e.target.value)
    }
  }

const LoginAccess = async (e) =>{
    e.preventDefault()
    
    try{
      const request = await  Axios.post('login',{
        email:username,
        password:password
      })

      console.log(request.data.token);
      
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + request.data.token
      // localStorage.setItem('token',request.data.token)
      // console.log(localStorage.getItem('token'));
      SaveUser(request.data.user)
      
      history.push('/homepage')
    }
    catch(e){
      console.log('Cant Send Request');
    }
    

  }


return (
    <div className="flex">
      <div className="side-picture login-picture" >
        
      </div>
      <div className="form form-margin-login">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username/Email</label>
                <input id="username" type="text" name="username" value={username} onChange={LoginDataHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} name="password" onChange={LoginDataHandler} />
              </div>
              <div className="form-group">
              <label className="form-remember">
                  <input type="checkbox" />Remember Me
              </label>
              <Link className="form-recovery" to="#">Forgot Password?</Link>
              <Link className="form-recovery" to="/signup">Signup</Link>
              
              </div>
              <div className="form-group">
                <button type="submit" onClick = {LoginAccess}>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
