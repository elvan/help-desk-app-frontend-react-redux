import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './features/home/HomePage';
import { LoginPage } from './features/users/LoginPage';
import { RegisterPage } from './features/users/RegisterPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='d-flex flex-column vh-100'>
          <Header />

          <main className='container-lg'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
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
