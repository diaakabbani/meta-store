import React from "react";
import { useSelector } from "react-redux";
import Header from "../../widgets/header/header";
import Footer from "../../component/footer/footer";
const Product = (props) => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div>
      <Header />
      {products[0].title},{products[0].img},{products[0].description}
      <Footer />
    </div>
  );
};

export default Product;
