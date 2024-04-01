import './App.css';
import Login from './pages/login/Login';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Login />
  </div> //p-4: Applies padding of 1rem (16px) on all sides of the div. h-screen: Sets the height of the div to be 100vh, making it fill the height of the screen.
  );
}

export default App
