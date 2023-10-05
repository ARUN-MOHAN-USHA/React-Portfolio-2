import { Container, Nav, Navbar } from "react-bootstrap"
import {Link} from 'react-router-dom';

function Header(){

    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>       
    )
}

export default Header


// Please send your updated GitHub Profile and make sure it has the following Projects as Individual Repositories in addition to the Exit Test Version. 

// 1) HTML + CSS

// 2) Bootstrap (any CSS Library based Project) with more than 5 pages with Pagination , Login and SignUp form.

// 3) JavaScript DOM Manipulation. 

// 4) Submission No#2  Fortified (or Similar Project )with Front End Validation and strength meter for password in Sing Up form.

// 6) React App with multiple components. 

// 7) React App with Forms

// 8) React App with Router

// 9) React App with Data From External API

// 10) An Application Sever with Node.js alone to serve a HTML file.

// 11) An Application Server for your  any of the React Project.

// 12) A MERN STACK Application or your main Project