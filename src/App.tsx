import { Route, Routes } from 'react-router';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
  </>
}