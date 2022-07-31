// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../../widgets/header/header";
// import Footer from "../footer/footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// //import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "./home.scss";
// import Card from "../card/card";

// const Home = () => {
//   const [product, setProducts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((response) => setProducts(response.data.product));
//   }, []);
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <Header />
//       <div className="container">
//         {product.map((product, index) => {
//           return (
//             <Card
//             id={product.id}
//               // img={product.images[0]}
//               title={product.title}
//               description={product.description}
//             />
//           );
//         })}
//       </div>
//       <div className="footer">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;
