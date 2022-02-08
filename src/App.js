import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './features/home/Home';
import { Login } from './features/users/Login';
import { Register } from './features/users/Register';

export const App = () => {
  return (
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

        <footer className='d-flex align-items-center border-top mt-auto'>
          <span className='container-lg text-muted'>
            &copy; {new Date().getFullYear()} HelpDesk
          </span>
        </footer>
      </div>
    </BrowserRouter>
  );
};
