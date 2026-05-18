import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Index";
import ComponentesPage  from "./Pages/Componentes/index";
import Product from "./Pages/Product/index";
import CartPage from "./Pages/Cart";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componentes" element={<ComponentesPage />} />
        <Route path="/product/:category/:slug/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};