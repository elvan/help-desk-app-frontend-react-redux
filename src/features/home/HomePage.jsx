import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Get started with HelpDesk</h1>
      <p className='fs-5 col-md-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus enim
        quo excepturi? Porro, similique quia iure reiciendis quae et animi
        repellendus soluta distinctio, perspiciatis facere aut! Suscipit, beatae
        error!
      </p>

      <div className='mb-5'>
        <Link
          to='/login'
          className='btn btn-outline-secondary btn-lg px-4 me-2'
        >
          <FaSignInAlt size={27} className='me-2' />
          Login
        </Link>

        <Link to='/register' className='btn btn-success btn-lg px-4'>
          <FaUserPlus size={27} className='me-2' />
          Register
        </Link>
      </div>
    </div>
  );
};
