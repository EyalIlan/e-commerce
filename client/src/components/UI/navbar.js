
import  {Navbar,Nav,Container} from 'react-bootstrap'
import  {LinkContainer} from 'react-router-bootstrap'

export default function navbar({user}) {

    console.log(user)

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
            <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to ='/'>
            <Nav.Link ><i className="fas fa-user"></i> Sign up</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to ='/account'>
                <Nav.Link ><i className="fas fa-user-circle"></i> Account</Nav.Link>
            </LinkContainer>
           
    
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}


