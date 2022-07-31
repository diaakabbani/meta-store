import React from "react";
import { BrowserRouter   , Routes, Route} from "react-router-dom";
import Signup from "./container/signup/signup";
// import Card from "./component/card/card";
import Header from "./widgets/header/header";
import App from "./App";
import Login from "./container/login/login";
import About from "./container/about/about";
import Home from "./component/home/home";
import Cart from "./cart/cart";
import Product from "./container/product/product";
export const Navigation = () => {
  return (
    <BrowserRouter>
    
        {/* <Link to="/product">Product</Link> */}
        {/* <NavLink to="/product">Product</NavLink> */}
     
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/header" element={<Header />} />
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
