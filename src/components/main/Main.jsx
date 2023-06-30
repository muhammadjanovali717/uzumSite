import React from 'react'
import "./Main.css"
import rasm1 from "../../assets/olcha/flex.png"
import rasm2 from "../../assets/olcha/flex1.png"
import rasm3 from "../../assets/olcha/flex2.png"
import rasm4 from "../../assets/olcha/flex3.png"
import rasm5 from "../../assets/olcha/flex4.png"
import rasm6 from "../../assets/olcha/flex5.png"
import rasm7 from "../../assets/olcha/flex6.png"
import rasm8 from "../../assets/olcha/flex7.png"
import rasm9 from "../../assets/olcha/flex8.png"
import rasm10 from "../../assets/olcha/flex9.png"


function Main() {
  const PRODUCT=[
    { url:rasm1,
     title:"Детский мир"
   },
   { url:rasm2,
     title:"Электроника"
   },
   { url:rasm3,
     title:"Дом и сад"
   },
   { url:rasm4,
     title:"Мода и стиль"
   },
   { url:rasm5,
     title:"Хобби, отдых и спорт"
   },
   { url:rasm6,
     title:"Обмен"
   },
   { url:rasm7,
     title:"Работа"
   },
   { url:rasm8,
     title:"Недвижимость"
   },
   { url:rasm9,
     title:"Транспорт"
   },
   { url:rasm10,
     title:"Бизнес  услуги"
   },
   { url:rasm10,
    title:"Бизнес  услуги"
  },
  { url:rasm10,
    title:"Бизнес  услуги"
  },  
 ]
 
  return (
        <div className='container'>
      <ul className='glavniy'>
      {
        PRODUCT?.map((item)=> <div key={item.id} className='card'>
        <img src={item.url} alt="" width={130} />
        <li>{item.title}</li>
        </div>)
      }
      </ul>
      
      
      </div>
  )
}

export default Main
