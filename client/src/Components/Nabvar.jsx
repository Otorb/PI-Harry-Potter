import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import '../styles/Navbar.css'
import Search from "./SearchBar"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Harry Potter Landing</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/create">Create a new Character</Nav.Link>                
            </Nav>
            <Search />
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample