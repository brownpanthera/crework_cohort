import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Adidas from './pages/Adidas';
import Main from './pages/Main';
import Nike from './pages/Nike';

function App() {
  return (
    <div className="">
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/nike' element={<Nike />}/>
      <Route path='/adidas' element={<Adidas />}/>
    </Routes>
    </div>
  );
}
export default App;