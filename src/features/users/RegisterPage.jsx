import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from './userActions';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.userState
  );

  const error = false;
  const pending = false;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(userData));
  };

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='text-center pb-3 pt-3'>
              <FaUserPlus className='me-2 pb-1' size={32} />
              Register
            </h3>

            <p className='lead text-center'>
              <strong>
                Create an account today, it's free and it only takes a minute
              </strong>
            </p>

            <hr />

            <form onSubmit={onSubmit}>
              {error ? (
                <div className='alert alert-warning'>Error message</div>
              ) : null}

              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  className='form-control'
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={onChange}
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

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

              <div className='mb-3'>
                <label htmlFor='confirmPassword' className='form-label'>
                  Confirm Password
                </label>
                <input
                  className='form-control'
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={confirmPassword}
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
                  <FaUserPlus className='me-2 pb-1' size={18} />
                  {pending ? 'Registering...' : 'Register'}
                </button>
              </div>

              <hr />

              <div className='text-center'>
                <p>Already have an account?</p>
                <p>
                  <Link to='/login'>Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
