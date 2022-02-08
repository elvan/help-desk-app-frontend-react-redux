import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './features/home/Home';
import { Login } from './features/users/Login';
import { Register } from './features/users/Register';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='d-flex flex-column vh-100'>
          <Header />

          <main className='container-lg'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer
        position='top-right'
        theme='colored'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
