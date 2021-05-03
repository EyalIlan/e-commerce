import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import axios from 'axios';


function User() {
  const [user, setUser] = useState(null)

  // const getUser = async () =>{
  //   const data = await axios.get('api/getUser')
  //   setUser(data.data)
  // }


  return (
    <div className="App">
        <h1>Hello world</h1>      
    </div>
  );
}

export default User;
