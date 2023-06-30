import React, {useState} from "react";
import "./Account.css";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
function Account() {

  const [username, setUsername] = useState ("")
  const [password, setPassword] = useState ("")
  const navigate = useNavigate()
  const handleLogin = (e) =>{
    e.preventDefault()
    let newUser = {username,password}
    console.log(newUser)
    if (username === "Mukhammadov" && password === "03232007"){
    localStorage.setItem("user", JSON.stringify(newUser))
    toast.success("log in")
    navigate("/admin/create-product")      
  }else{
      toast.error("username or password is incorrect")
    }
  }
  return (
    <div className="container account">
    <form onSubmit={handleLogin} className="account__container">
      <button>Telefon raqamini kiriting</button>
      <h3>Tasdiqlash kodini SMS orqali yuboramiz</h3>
      <div className="account__input">
        <input type="text" name="" id="" onChange={e=> setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div className="account__input">
        <input value={password} type="password" name="" id="" onChange={e=> setPassword(e.target.value)} placeholder="Password" />
      </div>
      <button className="account__button">Kodni olish</button>
      <br />
      <a href="#" className="account__link">
        Parol bilan kirish
      </a>
      <p>
        Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash
        siyosatiga rozilik bildirasiz
      </p>
    </form>
  </div>  
  );
}

export default Account;
