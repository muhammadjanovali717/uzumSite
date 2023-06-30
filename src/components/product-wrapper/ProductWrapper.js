import React from "react";
import "./ProductWrapper.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { addToCart, removeFromCart } from "../../context/cart";

function ProductWrapper({data}) {
  const dispatch = useDispatch();
  return (
    <div className="products">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <font>Скидка</font>
          <Link to={`/product/${item.id}`} state={item} className="card__image">
            <img src={item.url} alt="" />
          </Link>
          <button className="card__heart">
            <AiOutlineShoppingCart onClick={() => dispatch(addToCart(item))} /> <br />
            <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
          </button>
          
          <div className="card__body">
            <p className="card__title">{item.title}</p>
            <p className="card__rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>5.0 (585 baho)</span>
            </p>
            <div className="card__monthly">
              <span>{Math.round((item.price * 1.44) / 12)} so'm/oyiga</span>
            </div>
            <div className="card__price">
              <div>
                <p>{item.price} so'm</p>
                <del>{Math.round(item.price * 1.5)} so'm</del>
              </div>
            </div>
                <div className="card__btn">
                  <button>Рассрочка</button>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductWrapper;
