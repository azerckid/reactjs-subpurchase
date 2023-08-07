import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NaviBar } from "./components/layOut/NaviBar";
import Home from "./scene/Home";
import Product from "./scene/Product";
import Search from "./scene/Search";
import Footer from "./components/layOut/Footer";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
