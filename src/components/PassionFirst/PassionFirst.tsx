import style from "./style/style.module.scss";

import { useState } from "react";

import downScroll from "../../assets/img/home/downScroll.png";
import youtubeImg from "../../assets/img/home/youtubeImg.svg";
import facebookImg from "../../assets/img/home/facebookImg.svg";
import twitchImg from "../../assets/img/home/twitchImg.svg";
import twitterImg from "../../assets/img/home/twitterImg.svg";
import tik_tokImg from "../../assets/img/home/tik_tokImg.svg";
import instagramImg from "../../assets/img/home/instagramImg.svg";

import intImg from "../../assets/img/home/intImg.png";
import kuala_lumpur_Major_img from "../../assets/img/home/kuala-lumpur-Major_img.png";
import esl_one from "../../assets/img/home/esl_one.png";
import DREAMHACKMASTERS from "../../assets/img/home/DREAMHACKMASTERS.png";


const PassionFirst = () => {
  const [socialLi] = useState([
    {
      img: youtubeImg,
      path: "/",
    },
    {
      img: facebookImg,
      path: "/",
    },
    {
      img: twitchImg,
      path: "/",
    },
    {
      img: twitterImg,
      path: "/",
    },
    {
      img: tik_tokImg,
      path: "/",
    },
    {
      img: instagramImg,
      path: "/",
    },
  ]);
  const [tournamentImg] = useState([
    {
      img: intImg,
    },
    {
      img: kuala_lumpur_Major_img,
    },
    {
      img: esl_one,
    },
    {
      img: DREAMHACKMASTERS,
    },
  ]);

  return (
    <div className={style.passion_first}>
      <div className={style.passion_first_info}>
        <div className={style.passion_first_info_scrollDown}>
          <img src={downScroll} alt="downScroll_img" />
        </div>
        <div className={style.passion_first_info_text}>
          <h1>
            UNITED <span className={style.passion_first_info_text_spanBy}>BY</span> <br />
            <span className={style.passion_first_info_text_spanPassion}>PASSION</span>
          </h1>
        </div>
        <div className={style.passion_first_info_social}>
          <ul className={style.passion_first_info_social_ul}>
            {socialLi.map((i) => (
              <li>
                <img src={i.img} alt="img" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.passion_first_tournamentImg}>
        <ul>
          {tournamentImg.map((i) => (
            <li>
              <img src={i.img} alt="tournamentImg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PassionFirst;
