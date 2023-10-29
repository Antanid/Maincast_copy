import style from "./style/style.module.scss";

import aboutUsImg from "../../assets/img/esports/aboutUsImg.png";
import { useState } from "react";

const EsportsCompanies = () => {

  const [views] = useState([
{
  viewsOverview: '68M',
  text: 'Годин переглядів на Twitch за 2020'
},
{
  viewsOverview: '3.9М',
  text: 'Підписників у соціальних мережах'
},
{
  viewsOverview: '130M',
  text: 'Переглядів на Twitch в 2020'
},
  ])
  return (
  
    <div className={style.esportsCompanies}>
      <div className={style.esportsCompanies_imgText}>
        <div className={style.esportsCompanies_cableImg}>

        </div>
        <div className={style.esportsCompanies_imgText_imgBlock}>
          <img src={aboutUsImg} alt="about Us Img" />
        </div>
        <div className={style.esportsCompanies_imgText_textBlock}>
          <h3 className={style.esportsCompanies_imgText_textBlock_h3}>
            MAINCAST — ОДНА З <br/>
            <span>ПРОВІДНИХ КІБЕРСПОРТИВНИХ КОМПАНІЙ </span>
            ЄВРОПИ
          </h3>

          <div className={style.esportsCompanies_imgText_textBlock_online}>
<p className={style.esportsCompanies_imgText_textBlock_online_procent}>75%</p>
<p className={style.esportsCompanies_imgText_textBlock_online_text}>медіяправ на трансляції преміум-турнірів з Dota2 та CS:GO
</p>
          </div>
          <div className={style.esportsCompanies_imgText_textBlock_numberOne}>
<p className={style.esportsCompanies_imgText_textBlock_online_procent}>#1</p>
<p className={style.esportsCompanies_imgText_textBlock_online_text}>
Канал csgomc_ru серед російськомовних кіберспортивних каналів
</p>
          </div>

        </div>
      </div>
      <div className={style.esportsCompanies_views}>
<ul>
  {
    views.map((i) => (
      <li>
        <div className={style.esportsCompanies_views_num}>
{i.viewsOverview}
        </div>
        <div className={style.esportsCompanies_views_line}></div>
        <div  className={style.esportsCompanies_views_text}>
{i.text}
        </div>
      </li>
    ))
  }
</ul>
      </div>
      <div className={style.esportsCompanies_bgCabel}>
        
      </div>
    </div>
   
  );
};

export default EsportsCompanies;
