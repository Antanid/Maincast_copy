import { useState } from "react";
import style from "./style/style.module.scss";

import katNewImg from "../../assets/img/records/kat-new.png";
import eslImg from "../../assets/img/records/esl.png";
import eslProImg from "../../assets/img/records/esl-pro.png";
import kualaImg from "../../assets/img/records/kuala.png";

const Records = () => {
  const [recordsLi] = useState([
    {
      img: katNewImg,
      views: "382K",
      textFirst: "Пік переглядів",
      textSecond: "Рекорд за переглядами серед російськомовних трансляцій турнірів з ",
      textSpan: "CS:GO",
    },
    {
      img: eslImg,
      views: "27M",
      textFirst: "Всього переглядів ",
      textSecond: "Рекорд за переглядами в історії онлайн-турнірів з ",
      textSpan: "Dota 2",
    },
    {
      img: eslProImg,
      views: "32M",
      textFirst: "Всього переглядів ",
      textSecond: "Рекорд за переглядами серед онлайн-турнірів з ",
      textSpan: "CS:GO",
    },
    {
      img: kualaImg,
      views: "238K",
      textFirst: "Пік глядачів",
      textSecond: "Рекорд за кількістю одночасних глядачів на ",
      textSpan: "російськомовній трансляції",
    },
  ]);
  return (
  <div className={style.record}>
<h5>РЕКОРДИ ТА ДОСЯГНЕННЯ</h5>
<div className={style.record_info}>
<ul>
    {
        recordsLi.map((i, index) => (
            <li key={index}>
                <img src={i.img} alt='imgLi'/> 
                <div className={style.record_info_liText}>
                <h6>{i.views}</h6>
                <p className={style.record_info_liText_red}>{i.textFirst}</p>
                <p>{i.textSecond}<span>{i.textSpan}</span></p>
                </div>
            </li>
        ))
    }
</ul>
</div>
  </div>
  );
};

export default Records;
