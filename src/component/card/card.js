import React from "react";
import Cart from "../../cart/cart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../../redux/data/addCartSlice";
import "./Card.scss";

const Card = (product) => {
  // =[{id,img,title,descrption}]
  const count = useSelector((state) => state);
  // console.log(count);

  const dispatch = useDispatch();
  const handlecart = () => {
    console.log(product);
    dispatch(cartSlice.actions.addCart(product));
  };
  // const navigate = useNavigate();

  return (
    <div className="card">
      <div className="container">
        <img className="card__image" src={product.img} />
        <h2 className="card__title">{product.title}</h2>
        <p className="card__descrption">{product.descrption}</p>
        <button className="card__btn"> view </button>
        {/* <Cart product={props}/> */}
        <button className="bttn" onClick={() => handlecart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
