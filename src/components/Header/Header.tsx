import style from "./style/style.module.scss";

import headerLogo from "../../assets/img/header/headerLogo.svg";
import { useEffect, useState } from "react";

import { Squash as Hamburger } from 'hamburger-react'


const Header = () => {
  const [manuLi] = useState([
    {
      text: "ПРО НАС",
      path: "/",
    },
    {
      text: "ПОСЛУГИ",
      path: "/",
    },
    {
      text: "TУРНІРИ",
      path: "/",
    },
    {
      text: "КЕЙСИ ТА МЕДІА",
      path: "/",
    },
    {
      text: "КОНТАКТИ",
      path: "/",
    },
  ]);
  const [langLi] = useState([
    'UA',
    'ENG'
  ])
  const [selectedlang, setSelectedlang] = useState('UA');
  const [onOpenLang, setOpenLang] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [burgenOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

const onOpenLangPopUp = (text: string) => {
  setOpenLang(prev => !prev)
  setSelectedlang(text)
}

  return (
    <header className={isScrolled || burgenOpen ? style.header_bg : style.header}>
      <div className={style.header_logo}>
        <img src={headerLogo} alt="header_logo" />
      </div>

      <ul className={style.header_ul}>
        {manuLi.map((i) => (
          <li>{i.text}</li>
        ))}
      </ul>

<div className={style.header_info}>
<div className={style.header_info_online}>
<span>LIVE</span>

<div className={style.header_online_img}>
<div></div>
<div></div>
</div>

</div>
<div className={style.header_info_language}>
<button onClick={() => setOpenLang(prev => !prev)}>
  {selectedlang}
</button>
{
  onOpenLang && 
  <div className={style.header_info_language_moreLang}>
 <ul>
  {
    langLi.filter((i: string) => i !== selectedlang).map((i) => (
      <li onClick={() => onOpenLangPopUp(i)}>{i}</li>
    ))
  }
 </ul>
 </div>
}
</div>

<div className={style.header_info_burger}>
  
<Hamburger toggled={burgenOpen} toggle={setBurgerOpen} />

</div>

{

  <div className={style.header_info_burger_menuDiv}>
    <ul className={burgenOpen ? style.header_ul_burger_open : style.header_ul_burger_close}>
        {manuLi.map((i, index) => (
          <li key={index}><span>0{index + 1}</span>{i.text}</li>
        ))}
      </ul> 
      </div> 
}


</div>

    </header>
  );
};

export default Header;
