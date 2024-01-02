import './App.css';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './common/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
