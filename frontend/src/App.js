import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Loginsignup from './pages/Loginsignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route path='/Womens' element={<Shopcategory banner={women_banner}  category="women"/>}/>
      <Route path='/Kids' element={<Shopcategory banner={kid_banner}  category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/login' element={<Loginsignup/>}/>
       
     </Routes>  
     <Footer/> 
     </BrowserRouter>
    </div>
  );
}

export default App;
