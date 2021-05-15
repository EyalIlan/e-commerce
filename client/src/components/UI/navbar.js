

import React, { useState, useEffect } from 'react'
import  {Navbar,Nav,Container} from 'react-bootstrap'
import  {LinkContainer} from 'react-router-bootstrap'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

export default function NAvbar({user,Logout}) {

        
    const [userName,SetUserName] = useState('')
    const history = useHistory()


    const logoutHandler = async (e) =>{
        e.preventDefault()
        await  Axios.post('logoutall')
        Logout()
        localStorage.removeItem('token')
        history.push('/')
    }

    useEffect(() =>{
        
        if(user){
            SetUserName(user.username)
        }

    },[user])



    let Admin = '';
    let signup = <LinkContainer to ='/'>
                 <Nav.Link ><img src="https://img.icons8.com/dusk/30/000000/change-user-male.png" alt="Signup"/>  Sign up</Nav.Link>
                </LinkContainer>



    if(user){

        signup = (<LinkContainer to ='/' onClick={logoutHandler}>
                     <Nav.Link ><img src="https://img.icons8.com/color/30/000000/logout-rounded--v1.png"alt="Logout"/> Logout</Nav.Link>
                    </LinkContainer>
                )

        if(user.type === 'admin'){
            Admin = (  <LinkContainer to ='/admin'>
                    <Nav.Link ><img src="https://img.icons8.com/color/35/000000/administrator-male-skin-type-7.png"alt="Admin"/> Admin</Nav.Link>
                 </LinkContainer>)
        }
    }



    return (
        <div className="MainNavbar">
        <Navbar bg="info" variant="dark" expand="lg" className="MainNavbar">
        <Container>
        <LinkContainer to='/homepage'>
        <Navbar.Brand><i className="fas fa-dumbbell"></i> ExtremeSport</Navbar.Brand >
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-align">
        <Nav className="ml-auto">
            
            <LinkContainer to ='/cart'>
            <Nav.Link ><img src="https://img.icons8.com/plasticine/35/000000/favorite-cart.png" alt="Cart"/> Cart</Nav.Link>
            </LinkContainer>

           {signup}
            
            <LinkContainer to ='/account'>
                <Nav.Link ><img src="https://img.icons8.com/plasticine/35/000000/test-account.png" alt="Account"/> Account</Nav.Link>
            </LinkContainer>
                 {Admin}
        </Nav>
        </Navbar.Collapse>
        </Container>
        {/* <h6>{userName}</h6>   */}
      </Navbar>
    </div>
    )
}


