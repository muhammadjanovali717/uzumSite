import React from "react";
import "./Navbar.css"
import { AiFillCalculator } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";

function NavbarTop() {
  return (
    <div className="navbar__top">
        <MdAddIcCall/>
      <div className="container navbar__top-wrapper">
        <div className="navbar__top-right">
      <button className="btn1">0% Рассрочка</button>
      <button className="btn2">Скидки</button>
      <button className="btn3">Розыгрыши</button>
          <p>Карта сайта</p>
      </div>
      <font>olcha</font>
      <div className="navbar__top-left">
   <p className="p1">+998 (71) 202 202 1 </p>
     <button className="btn4">Продавайте на olcha</button>
        <div className="ul1">
          <p>Ўзб</p>
          <p>O'z</p>
          <p>Рус</p>
        </div>
        </div>
      </div>
        <span>Pyc</span>
    </div>
  );
}

export default NavbarTop;
