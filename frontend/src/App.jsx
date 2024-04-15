import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
     </Routes>
     <Toaster/>
    </div> //p-4: Applies padding of 1rem (16px) on all sides of the div. h-screen: Sets the height of the div to be 100vh, making it fill the height of the screen.
  );
}

export default App
