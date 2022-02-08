import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const error = false;
  const pending = false;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='text-center pb-3 pt-3'>
              <FaSignInAlt className='me-2 pb-1' size={32} />
              Login
            </h3>

            <p className='lead text-center'>
              <strong>Login to access the full features of HelpDesk</strong>
            </p>

            <hr />

            <form onSubmit={handleSubmit}>
              {error ? (
                <div className='alert alert-warning'>Error message</div>
              ) : null}

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  className='form-control'
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  required
                  minLength={5}
                  maxLength={50}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  className='form-control'
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  required
                  minLength={8}
                  maxLength={64}
                />
              </div>

              <div className='d-grid d-block gap-2'>
                <button type='submit' className='btn btn-success btn-block'>
                  {pending ? (
                    <span className='spinner-border spinner-border-sm mr-2'></span>
                  ) : null}
                  <FaSignInAlt className='me-2 pb-1' size={18} />
                  {pending ? 'Logging in...' : 'Login'}
                </button>
              </div>

              <hr />

              <div className='text-center'>
                <p>Need an account?</p>
                <p>
                  <Link to='/register'>Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
