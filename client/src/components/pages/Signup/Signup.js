import React, { useState} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Signup.css'

export default function Signup() {
   
   
   const [username,SetUserName] = useState('')
   const [email,SetEmail] = useState('')
   const [password,SetPassword] = useState('')
  //  const [Repassword,SetRePassword] = useState('')

   let history = useHistory()
   
   const LoginDataHandler = (e) =>{
     
     if(e.target.name === 'username'){
       SetUserName(e.target.value)
      }
     if(e.target.name === 'email'){
        SetEmail(e.target.value)
      }
     if(e.target.name === 'password'){
        SetPassword(e.target.value)
      }
     if(e.target.name === 'Repassword'){
        // SetRePassword(e.target.value)
    }
    
    }
    
const SingUpHandler = async (e) =>{
    e.preventDefault()
    

    const request = await  Axios.post('user/add',{
      username:username,
      email:email,
      password:password
    })

    //need to check if the user exists or not
    console.log(request);
    history.push('/homepage')

  
  }




return (
    <div className="flex">

      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Sign up</h1>
            <Button className="bg-info" variant="dark" onClick={() =>{history.push('/')}}>Go Back</Button>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" onChange={LoginDataHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input id="username" type="text" name="email"  onChange={LoginDataHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" onChange={LoginDataHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="Repassword">Repassword</label>
                <input id="Repassword" type="password" name="Repassword" onChange={LoginDataHandler} />
              </div>
              <div className="form-group">
                <button type="submit" onClick = {SingUpHandler}>Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div  className="side-picture signup-picture">
      
      </div>
    </div>
  )
}
