import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

function HomePage({user}) {



  const history = useHistory()

  useEffect(() =>{
    if(!user){
      
      history.push('/')      
    
    }
  },[user,history])


return (
    <div>
        <div className="homepage">
          <div className ="main-title">
            <h1>
                Welcome to Extreme Sport
            </h1>
            <h3>the shop where you can find the Best Sport products</h3>

            </div>
        </div>

        
        
    
            </div>
  );
}

export default HomePage;


// import { useHistory } from 'react-router-dom'
// const history = useHistory();
// history.push(`path to route`)
