import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const brandStyle = {
    style: {
    fontSize: '24pt'
    }
}

const linkStyles = {

    style: {
    fontSize: '18pt',
    },
    classList: 'text-light'
}

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='col-12 dark' style={{height: '5vh',
    backgroundColor: '#111 !important'}}>
        <Container className='justify-content-between col-lg-10 col-xl-8 '>
          <Navbar.Brand href="#home" className='' style={brandStyle.style}>Hunter McCarthy</Navbar.Brand>
          <Nav className="d-flex col-4 justify-content-between">
            <Nav.Link href="/aboutme" style={linkStyles.style} className={linkStyles.classList}>About me</Nav.Link>
            <Nav.Link href="/contact" style={linkStyles.style} className={linkStyles.classList}>Contact</Nav.Link>
            <Nav.Link href="/portfolio" style={linkStyles.style} className={linkStyles.classList}>Portfolio</Nav.Link>
            <Nav.Link href="/resume" style={linkStyles.style} className={linkStyles.classList}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Header;