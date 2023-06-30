import React from 'react';
import { BsHeadphones, BsFillCalendar2WeekFill, BsBuildingsFill} from 'react-icons/bs';
import {  BiBookOpen,} from "react-icons/bi"
import { TbPaperBagOff} from "react-icons/tb"
import { MdFoodBank, MdOutlineInterests, MdChildCare} from "react-icons/md"
import { GiVendingMachine, GiClothes, GiBallerinaShoes, GiAutoRepair, GiHealthNormal } from "react-icons/gi"
import { FaHeart, FaPumpSoap, FaFistRaised} from "react-icons/fa"
import { FcSportsMode} from "react-icons/fc"
import { WiWindBeaufort2} from "react-icons/wi"
import {BiLeaf} from "react-icons/bi"
import './Sidebar.css';

const icons = [
  { name: 'Elektronika', icon: <BsHeadphones /> },
  { name: 'Maishiy texnika', icon: <GiVendingMachine /> },
  { name: 'Kiyim', icon: <GiClothes/> },
  { name: 'Poyabzal', icon: <GiBallerinaShoes /> },
  { name: 'Aksesuarlar', icon: <TbPaperBagOff /> },
  { name: 'Gozallik', icon: <WiWindBeaufort2 /> },
  { name: 'Salomatlik', icon: <FaHeart /> },
  { name: 'Uy-qurilish buyumlari', icon: <GiHealthNormal /> },
  { name: 'Qurilish va tamirlash', icon: <BsBuildingsFill /> },
  { name: 'Avtotovarlar', icon: <GiAutoRepair /> },
  { name: 'Bolalar Tovarlari', icon: <MdChildCare /> },
  { name: 'Hobbi va Ijod', icon: <MdOutlineInterests /> },
  { name: 'Sport va Hordiq', icon: <FcSportsMode /> },
  { name: 'Oziq ovqat mahsulotlari', icon: <MdFoodBank /> },
  { name: 'Maishiy kimyoviy moddalar va shaxsiy gigeniya', icon: <FaPumpSoap /> },
  { name: 'Kansalariya tovarlari', icon: <BsFillCalendar2WeekFill /> },
  { name: 'Hayvonlar uchun tovarlar', icon: <FaFistRaised /> },
  { name: 'Kitoblar', icon: <BiBookOpen /> },
  { name: 'Dacha, Bog va tomorqa', icon: <BiLeaf /> },
];

function Sidebar({ show, setShow }) {
  return (
    <>
      {show ? <div className='sidebar__shadow' onClick={() => setShow(false)}></div> : <></>}
      <div className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar__content">
          {icons.map((icon, index) => (
            <div className="sidebar__item" key={index}>
              <div className="sidebar__icon">{icon.icon}</div>
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;