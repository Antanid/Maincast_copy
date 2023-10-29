import style from './style/style.module.scss';

import { useState } from 'react';

import buttonArrow from '../../assets/img/footer/buttonArrow.svg';
import youtubeImg from '../../assets/img/home/youtubeImg.svg';
import twitchImg from '../../assets/img/home/twitchImg.svg';
import twitterImg from '../../assets/img/home/twitterImg.svg';
import instagramImg from '../../assets/img/home/instagramImg.svg';
import facebookImg from '../../assets/img/home/facebookImg.svg';
import tik_tokImg from '../../assets/img/home/tik_tokImg.svg';


const Footer = () => {
  const [dota2] = useState([
    {
      text: 'Dota2VODsMaincast',
      img: youtubeImg
    },
    {
      text: 'Dota2Maincast',
      img: youtubeImg
    },
    {
      text: 'dota2mc',
      img: twitchImg
    },
    {
      text: 'dota2mc_ua',
      img: twitterImg
    },
    {
      text: 'dota2mc',
      img: instagramImg
    },
    {
      text: 'dota2mc',
      img: facebookImg
    },
  ])
  const [cs] = useState([
    {
      text: 'CSGOVODsMaincast',
      img: youtubeImg
    },
    {
      text: 'csgo_mc',
      img: twitchImg
    },
    {
      text: 'csgomc_ua',
      img: twitterImg
    },
    {
      text: 'csgomcast',
      img: instagramImg
    },
  ])
  const [contact] = useState([
    {
      img: youtubeImg
    },
    {
      img: facebookImg
    },
    {
      img: twitchImg
    },
    {
      img: twitterImg
    },
    {
      img: tik_tokImg
    },
    {
      img: instagramImg
    },
  ])
  return (
    <footer className={style.footer}>
<div className={style.footer_infoBlock}>

<div  className={style.footer_infoBlock_emailSend}>
<h3>CТЕЖТЕ ЗА НОВИНАМИ</h3>

<div className={style.footer_infoBlock_pMail}>
<p>ПІДПИШІТЬСЯ НА НАШУ РОЗСИЛКУ</p>
<form>
  <input type="email" placeholder='*Email'/>
  <button>
    <img src={buttonArrow} alt='send email'/>
  </button>
</form>
</div>
</div>


<div className={style.footer_infoBlock_SocialBlock}>
<div className={style.footer_infoBlock_dotaSocial}>
<h3>DOTA 2</h3>
<ul>
{
  dota2.map((i) => (
    <li>
      <div>
      <img src={i.img} alt={i.text}/>
      </div>
      <p>{i.text}</p>
    </li>
  ))
}
</ul>
</div>
<div className={style.footer_infoBlock_dotaSocial}>
<h3>CSGO</h3>
<ul>
{
  cs.map((i) => (
    <li>
      <div>
      <img src={i.img} alt={i.text}/>
      </div>
      <p>{i.text}</p>
    </li>
  ))
}
</ul>
</div>
</div>




</div>
<div className={style.footer_lastBlock}>
<p>MAINCAST®, INC 18 - 22©</p>
<ul className={style.footer_lastBlock_ul}>
  {
contact.map((i) => (
  <li>
    <img src={i.img} alt='social'/>
  </li>
))
  }
</ul>
<div className={style.footer_lastBlock_text}>
<h4>КАР’ЄРА</h4>
<h4>УМОВИ НАДАННЯ ПОСЛУГ</h4>
<h4>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</h4>
</div>
</div>
    </footer>
  )
}

export default Footer