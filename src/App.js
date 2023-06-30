import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./router/home/Home"
import Wishlist from "./router/wishlist/Wishlist"
import Cart from './router/cart/Cart';
import Account from './router/account/Account';
import ProductInfo from './router/product-info/ProductInfo';
import Auth from './router/auth/Auth';
import Admin from './router/admin/Admin'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/' element={<Auth/>} >
          <Route path='/admin/*' element={<Admin/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
