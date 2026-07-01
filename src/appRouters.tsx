import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Home } from "./Pages/Home/Index";
const Product = lazy(() => import("./Pages/Product/index"));
const CartPage = lazy(() => import("./Pages/Cart"));
const Favorites = lazy(() => import("./Pages/Favorites"));
const Search = lazy(() => import("./Pages/Search"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const Payment = lazy(() => import("./Pages/Payment"));
const Card = lazy(() => import("./Pages/Payment/Card"));

const Login = lazy(() => import("./Pages/auth/login"));
const Register = lazy(() => import("./Pages/auth/register"));
const ForgotPassword = lazy(() => import("./Pages/auth/forgotPassword"));


const ProfileLayout = lazy(() => import("./Pages/Profile/profileLayout"))
const ProfileHome = lazy(() => import("./Pages/Profile/home"))
const ProfileAddress = lazy(() => import("./Pages/Profile/Address"))
const ProfileOrders = lazy(() => import("./Pages/Profile/orders"))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
         <Suspense fallback={<div>Carregando...</div>}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product/:category/:slug/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/search" element={<Search/>} />     
        <Route path="/payment/checkout/:checkoutId" element={<Checkout/>}/> 
        <Route path="/payment/pix/:checkoutId" element={<Payment/>} />
        <Route path="/payment/card/:checkoutId" element={<Card/>} />

        {/*Rotas de autenticação */}
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
        <Route path="/auth/forgot-password" element={<ForgotPassword/>} />

        {/*Rotas do perfil do usario */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileHome />} />
          <Route path="address" element={<ProfileAddress />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
      </Routes>
        </Suspense>
    </BrowserRouter>
  );
};