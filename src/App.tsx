import { Route, Routes } from 'react-router';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const App = () => {
  return <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
}