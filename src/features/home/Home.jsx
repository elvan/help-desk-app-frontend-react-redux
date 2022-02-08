import { Link } from 'react-router-dom';

export const Home = () => {
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
          to='/register'
          type='button'
          className='btn btn-primary btn-lg px-4'
        >
          Register Today
        </Link>
      </div>
    </div>
  );
};
