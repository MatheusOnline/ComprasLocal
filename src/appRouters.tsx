import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Index";
import  ComponentesPage  from "./Pages/Componentes/index";
import Product from "./Pages/Product/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componentes" element={<ComponentesPage />} />
        <Route path="/product/:category/:slug/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};