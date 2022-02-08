import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  FaHireAHelper,
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/users/userActions';
import { resetUserState } from '../features/users/userSlice';

export const Header = () => {
  const { user } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(resetUserState());
    navigate('/');
  };

  useEffect(() => {}, [user]);

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

            {user ? (
              <NavDropdown
                id='basic-nav-dropdown'
                align='end'
                title={user.name}
              >
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>
                  <FaSignOutAlt className='me-1' />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={NavLink} to='/login'>
                  <FaSignInAlt className='pb-1' /> Login
                </Nav.Link>
                <Nav.Link as={NavLink} to='/register'>
                  <FaUserPlus className='pb-1' /> Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
