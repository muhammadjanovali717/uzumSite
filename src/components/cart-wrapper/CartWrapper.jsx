import React from 'react'
import "./CartWrapper.css"
import {addToCart, decrementCart, removeFromCart} from "../../context/cart"
import { useDispatch } from 'react-redux'
function CartWrapper({data}) {

    const handleSubmit = (e) => {
        e.preventDefault();
      let token = "5834835746:AAEVop_Y-jcUJARKjXyXrh7s2hHrJeWrkeo";
      let chat_id = -1001879496515;
      let text1 = encodeURIComponent(document.getElementById("text1").value);
      let text2 = encodeURIComponent(document.getElementById("text2").value);
      let text3 = encodeURIComponent(document.getElementById("text3").value);
      let my_text = ` %0A - Buyurtma beruvchining ismi: ${text1} %0A - Buyurtma beruvchining raqami: ${text2}  %0A - Buyurtma beruvchining manzili: ${text3} %0A %0A`;

      data?.forEach(item=>{
        my_text += `Nomi: ${item.title} %0A %0A`
        my_text += `Soni : ${item.quantity} %0A %0A`
        my_text += `Narxi: ${item.price} %0A %0A`
      })

      my_text += `Jami: ${data?.reduce((a, b) => a + (b.price * b.quantity), 0)} som`

      let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      console.log("Message sent");
    };
    const dispatch = useDispatch()
    return (
    <div className='cart__wrapper'>
        <div className='cart__wrapper__content'>
    {
        data?.map((item)=> <div key={item.id} className='cart__wrapper-item'>
        <img src={item.url} width={100} alt="" />
        <div className="cart__wrapper-text">
        <div className="cart__wrapper__display">
        <h3>{item.title}</h3>
        <button onClick={()=> dispatch(removeFromCart(item))}>Ochirish</button>
        </div>
        <h2>{item.quantity * item.price} som</h2>
        <div className="btn__flex">
        <button disabled={item.quantity <= 1} onClick={()=> dispatch(decrementCart(item))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={()=> dispatch(addToCart(item))}>+</button>
        </div>
        <p>{item.price}so'm</p>
        <del>
          
        </del>

        </div>
        <br />
        <br />
        <br />
        <br />
        </div>
        )}
    </div>
    <div className="cart__wrapper-form">
    <div className="cart__wrapper__form">
        <h2>Buyurtmangiz</h2> 
        <form id="form"  onSubmit={handleSubmit}>
          <input type="text" id="text1" placeholder="Buyurtma beruvchi ismi" />
          <input type="text" id="text2" placeholder="Buyurtma beruvchi raqami" />
          <input type="text" id="text3"  placeholder="Buyurtma beruvchi manzili" />
        <h3>Jami: {data?.reduce((a,b)=> a+ (b.price * b.quantity) ,0)} som</h3>
        <button className='btn' type="submit" >Rasmiylashtirish</button>  </form> <br />
    </div>
    </div>
    </div>
  )
}

export default CartWrapper