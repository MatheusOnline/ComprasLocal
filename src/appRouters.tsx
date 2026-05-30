import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Index";
import Product from "./Pages/Product/index";
import CartPage from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Search from "./Pages/Search";
import Checkout from "./Pages/Checkout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category/:slug/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/search" element={<Search/>} />     
        <Route path="/payment/checkout" element={<Checkout/>}/> 
      </Routes>
    </BrowserRouter>
  );
};