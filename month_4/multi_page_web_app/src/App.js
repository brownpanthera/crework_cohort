import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Adidas from './pages/Adidas';
import Ap1 from './pages/Ap1';
import Apparel from './pages/Apparel';
import Birkenstock from './pages/Birkenstock';
import Crocs from './pages/Crocs';
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
      <Route path='/crocs' element={<Crocs />}/>
      <Route path='/birkenstock' element={<Birkenstock />}/>
      <Route path='/apparel' element={<Apparel />}/>
      <Route path='/apparel/ap1' element={<Ap1 />}/>
    </Routes>
    </div>
  );
}
export default App;