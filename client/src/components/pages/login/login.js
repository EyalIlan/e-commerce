import React, { useState } from 'react'
import Axios from 'axios'
import classes from './login.css'
import {useHistory,Link} from 'react-router-dom'

export default function Login() {
  
  
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
    
    const request = await  Axios.post('login',{
      email:username,
      password:password
    })
    
    //need to check if the user exists or not
    console.log(request);
    history.push('/homepage')

  
  }


return (
    <div>
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
