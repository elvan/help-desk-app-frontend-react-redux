import { useEffect, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from './userActions';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: 'demo@example.com',
    password: 'pswd1234',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.userState
  );

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/');
    }

    if (isError) {
      toast.error(message);
    }
  }, [isSuccess, isError, message, user, navigate]);

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

            <p className='alert alert-info'>
              Use this demo account to test the application:
              <br />
              <strong>
                Email: <span className='text-primary'>demo@example.com</span>
              </strong>
              <br />
              <strong>
                Password: <span className='text-primary'>pswd1234</span>
              </strong>
            </p>

            <hr />

            <form onSubmit={onSubmit}>
              {isError ? (
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </div>

              <div className='d-grid d-block gap-2'>
                <button
                  type='submit'
                  className='btn btn-success btn-block'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className='spinner-border spinner-border-sm mr-2'></span>
                  ) : null}
                  <FaSignInAlt className='me-2 pb-1' size={18} />
                  {isLoading ? 'Logging in...' : 'Login'}
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
