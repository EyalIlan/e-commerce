import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './login.css'


export default function Login() {
  
  
  const [username,SetUserName] = useState('')
  const [password,SetPassword] = useState('')


  const LoginDataHandler = (e) =>{

    if(e.target.name === 'username'){
       SetUserName(e.target.value)
    }else{
      SetPassword(e.target.value)
    }
  }

  const LoginAccess = async (e) =>{
  e.preventDefault()
  
  const request = await  Axios.post('login',{
      email:username,
      password:password
     })

  console.log(request);

  }


return (
    <div>
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label for="username">Username/Email</label>
                <input id="username" type="text" name="username"  onChange={LoginDataHandler}/>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" onChange={LoginDataHandler} />
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />Remember Me
            </label><a className="form-recovery" href="#">Forgot Password?</a>
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
