
import  {Navbar,Nav,Container} from 'react-bootstrap'
import  {LinkContainer} from 'react-router-bootstrap'

export default function navbar() {

    return (
        <div className="MainNavbar">
        <Navbar bg="info" variant="dark" expand="lg" className="MainNavbar">
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand><i class="fas fa-dumbbell"></i> ExtremeSport</Navbar.Brand >
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-align">
        <Nav className="ml-auto">
            
            <LinkContainer to ='/cart'>
            <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to ='/login'>
            <Nav.Link ><i className="fas fa-user"></i> Sign up</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to ='/account'>
                <Nav.Link ><i class="fas fa-user-circle"></i> Account</Nav.Link>
            </LinkContainer>
           
    
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}


