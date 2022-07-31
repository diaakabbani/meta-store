import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/card/card";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./widgets/header/header";
import Footer from "./component/footer/footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Cart from "./cart/cart";
const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProduct(response.data.products));
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="container">
        {product?.map((product, index) => {
          return (
            <Card
              id={product.id}
              img={product.images[0]}
              title={product.title}
              descrption={product.description}
              // product={product}
            />
          );
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default App;
