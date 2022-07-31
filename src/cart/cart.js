import React from "react";
import Footer from "../component/footer/footer";
import "./cart.scss";
import Header from "../widgets/header/header";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../redux/data/addCartSlice";
import { addCart, removeCart } from "../redux/data/addCartSlice";

const Cart = (product) => {
  const data = useSelector((state) => state.cart.product);
  console.log("cart =======?", data);

  const dispatch = useDispatch();
  const handleremovecart = (id) => {
    dispatch(removeCart(id));
  };

  // sexy code
  return (
    <div className="con">
      <Header />
      <h3>Cart</h3>

      {data.map((product) => (
        <h2 className="card__title">
          {product.title}
          <br />
          <img className="card__image" src={product.img} />
          <br />
          <p className="card__descrption">{product.descrption}</p>
          <br />
          <button className="bttn" onClick={() => handleremovecart(product.id)}>
            remove
          </button>
        </h2>
      ))}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

{
  /* {data.title}
       <br />
      {products.img}
      <br />
      {products.description} */
}

{
  /* {products.map.title},{products[0].img},{products[0].description} */
}

{
  /* {data.map((products) => (
        <div>{products.title},</div>
      ))} */
}

{
  /* {data.map((products) => (
        <img className="card__image" src={products.img}  />
      ))} */
}

{
  /* {data.map((products) => (
        <p className="card__descrption">{products.descrption}</p>
      ))} */
}
{
  /* <img className="image" src={products.img} />
      <h2 className="title">{products.title}</h2>
      <p className="descrption">{products.descrption}</p> */
}
