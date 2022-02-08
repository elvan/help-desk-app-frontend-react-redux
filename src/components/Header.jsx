import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHireAHelper, FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg='light' expand='md' className='mb-3'>
      <Container fluid='lg'>
        <Navbar.Brand
          as={NavLink}
          to='/'
          className='d-flex align-items-center text-dark text-decoration-none'
        >
          <FaHireAHelper size={30} className='me-2' />
          <span className='fs-4'>HelpDesk</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link as={NavLink} to='/'>
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/login'>
              <FaSignInAlt /> Login
            </Nav.Link>
            <Nav.Link as={NavLink} to='/register'>
              <FaUserPlus /> Register
            </Nav.Link>
            <NavDropdown align='end' title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
