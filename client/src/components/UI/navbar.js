
import  {Navbar,Nav,Container} from 'react-bootstrap'


export default function navbar() {

    return (
        <div className="MainNavbar">
        <Navbar bg="info" variant="dark" expand="lg" className="MainNavbar">
        <Container>
        <Navbar.Brand href="/home"><i class="fas fa-dumbbell"></i> ExtremeSport</Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-align">
        <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i> Sign up</Nav.Link>
            <Nav.Link href="/login"><i class="fas fa-user-circle"></i> Account</Nav.Link>
    
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
}


