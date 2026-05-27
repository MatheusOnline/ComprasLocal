import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Index";
import ComponentesPage  from "./Pages/Componentes/index";
import Product from "./Pages/Product/index";
import CartPage from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Search from "./Pages/Search";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componentes" element={<ComponentesPage />} />
        <Route path="/product/:category/:slug/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/search" element={<Search/>} />      
      </Routes>
    </BrowserRouter>
  );
};