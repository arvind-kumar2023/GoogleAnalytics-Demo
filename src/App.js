import './App.css';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './common/navbar';
import ProductsList from './components/products';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from './components/product-details';

function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/products' exact element={<ProductsList/>}/>
      <Route path='/product-details' exact element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
