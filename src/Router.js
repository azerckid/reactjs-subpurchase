import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NaviBar } from "./components/layOut/NaviBar";
import Footer from "./components/layOut/Footer";
import Home from "./scene/Home";
import Product from "./scene/Product";
import Search from "./scene/Search";
import Login from "./scene/Login";
import SingUp from "./scene/SignUp";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
