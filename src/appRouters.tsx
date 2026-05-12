import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Index";
import  ComponentesPage  from "./Pages/Componentes/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componentes" element={<ComponentesPage />} />
      </Routes>
    </BrowserRouter>
  );
};