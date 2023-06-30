import React from "react";
import "./WishlistWrapper.css";
import {
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
  AiFillStar
} from "react-icons/ai";
import {FiTrash2} from "react-icons/fi"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { useSelector } from "react-redux";
import {addToCart} from "../../context/cart"
import { db } from "../../server";
import { deleteDoc, doc} from "firebase/firestore"
import { toggle } from "../../context/proReload";
import { toast } from "react-toastify";

function WishlistWrapper({data, admin}) {
  const dispatch = useDispatch();
  const heart = useSelector(s => s.heart.value)
  
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
    .then(res => {
      dispatch(toggle())
      console.log(res)
          toast.warn('Ochirildi');
    })
    .catch(res => console.log(res))
    }
 
  return (

    <div className="products1">
    {data?.map((item) => (
      <div key={item.id} className="card1">
        <Link to={`/product/${item.id}`} state={item} className="card__image1">
          <img src={item.url} alt="" />
        </Link>
        <button className="card__heart1">
        {
          heart.some(i => i.id === item.id) ?
          <AiFillHeart onClick={()=> dispatch(removeFromHeart(item))} /> :
          <AiOutlineHeart onClick={()=> dispatch(addToHeart(item))} />
        }
        </button>
        <div className="card__body1">
          <p className="card__title1">{item.title}</p>
          <p className="card__rating1">
            <AiFillStar />
            <span>5.0 (585 baho)</span>
          </p>
          <div className="card__monthly1">
            <span>{Math.round((item.price * 1.44) / 12)} so'm/oyiga</span>
          </div>
          <div className="card__price1">
            <div>
              <del>{Math.round(item.price * 1.5)} so'm</del>
              <p>{item.price} so'm</p>
            </div>
          {
            admin ?
            <button className="price__cart1" onClick={()=> handleDelete(item.id)}>
              <FiTrash2 />
            </button> :
            <button className="price__cart1" onClick={()=> dispatch(addToCart(item))}>
            <AiOutlineShoppingCart />
          </button>
          }
          </div>
        </div>
      </div>
    ))}
  </div>

































    // <div className="products1">
    //   {data?.map((item) => (
    //     <div key={item.id} className="card1">
    //       <Link to={`/product/${item.id}`} state={item} className="card__image1">
    //         <img src={item.url} alt="" />
    //       </Link>
    //       <button className="card__heart1">
    //         {
    //         heart.some(i => i.id === item.id) ?
    //         <AiOutlineDelete onClick={() => dispatch(removeFromHeart(item))} /> :
    //         <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
    //       }
    //       </button>
    //       <div className="card__body1">
    //         <p className="card__title1">{item.title}</p>
    //         <div className="card__price1">
    //           <div>
    //             <del>{Math.round(item.price * 1.5)} so'm</del>
    //             <p>{item.price} so'm</p>
    //           </div>
    //           {
    //           admin ?
    //           <button className="price__cart" onClick={()=> handleDelete(item.id)}>
    //             <FiTrash2 />
    //           </button> :
    //           <button className="price__cart" onClick={()=> dispatch(addToCart(item))}>
    //           <AiOutlineShoppingCart />
    //         </button>
    //         }
    //         </div>
    //         <div className="card__btn1">
    //     <button>Рассрочка</button>
    //   </div>
    //    </div>
    //    </div>
    //   ))}
    // </div>
  );
}

export default WishlistWrapper;
