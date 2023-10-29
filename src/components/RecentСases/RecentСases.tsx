import style from "./style/style.module.scss";

import triangleImg from "../../assets/img/recentСases/triangleImg.svg";
import mcEslImg from "../../assets/img/recentСases/mc-esl.png";
import FourYears from "../../assets/img/recentСases/FourYears.png";
import dpcMatch from "../../assets/img/recentСases/dpcMatch.png";
import dushaImg from "../../assets/img/recentСases/dushaImg.png";
import noWar from "../../assets/img/recentСases/noWar.webp";
import eslMeincast from "../../assets/img/recentСases/eslMeincast.png";
import dotaPit from "../../assets/img/recentСases/dotaPit.png";
import apexLegends from "../../assets/img/recentСases/apexLegends.png";
import twitchRecord from "../../assets/img/recentСases/twitchRecord.png";
import metaGame from "../../assets/img/recentСases/metaGame.png";

import { useState } from "react";
import RecentContent from "./RecentContent";
import ButtonMore from "../ButtonMore/ButtonMore";

const RecentСases = () => {
  const [data] = useState([
    {
      img: mcEslImg,
      text: "Компанія Maincast відмовляється від російськомовних прав на кіберспортивні турніри компанії ESL та фокусується на українськомовних етерах",
      date: "Кві 19, 2023",
      buttonText: "Новини компанії",
    },
    {
      img: FourYears,
      text: "MAINCAST ВИПОВНИЛОСЯ 4 РОКИ!",
      date: "Чер 09, 2022",
      buttonText: "Новини компанії",
    },
    {
      img: dpcMatch,
      text: "MAINCAST ТРАНСЛЮВАТИМЕ DPC-МАТЧІ ПʼЯТИ ЛІГ",
      date: "Чер 03, 2022",
      buttonText: "Новини компанії",
    },
    {
      img: dushaImg,
      text: "МИСТЕЦЬКИЙ ФРОНТ: БЛАГОДІЙНИЙ АУКЦІОН ДИТЯЧИХ МАЛЮНКІВ НА ПІДТРИМКУ УКРАЇНИ",
      date: "Тра 11, 2022",
      buttonText: "Новини компанії",
    },
    {
      img: noWar,
      text: "НІ ВІЙНІ!",
      date: "Бер 05, 2022",
      buttonText: "Новини компанії",
    },
    {
      img: eslMeincast,
      text: "MAINCAST БУДЕ ВИСВІТЛЮВАТИ ТУРНІРИ ESL GAMING ДО 2027 РОКУ",
      date: "Гру 22, 2021",
      buttonText: "Новини компанії",
    },
    {
      img: dotaPit,
      text: "MAINCAST ПРОВЕДЕ ОФІЦІЙНУ РОСІЙСЬКОМОВНУ ТРАНСЛЯЦІЮ SAPPHIRE OGA DOTA PIT EU/CIS SEASON 5",
      date: "Гру 09, 2021",
      buttonText: "Новини компанії",
    },
    {
      img: apexLegends,
      text: "MAINCAST БУДЕ ВИСВІТЛЮВАТИ APEX LEGENDS GLOBAL SERIES",
      date: "Жов 22, 2021",
      buttonText: "Новини компанії",
    },
    {
      img: twitchRecord,
      text: "КАНАЛ MAINCAST ІЗ DOTA 2 ОТРИМАВ НАЙБІЛЬШУ КІЛЬКІСТЬ ПЕРЕГЛЯДІВ НА TWITCH",
      date: "Лип 01, 2021",
      buttonText: "Новини компанії",
    },
    {
      img: metaGame,
      text: "MAINCAST ЗАПУСКАЄ МЕТАГРУ І ДАРУЄ ЦІННІ ПОДАРУНКИ",
      date: "Чер 23, 2021",
      buttonText: "Новини компанії",
    },
  ]);
  return (
    <div className={style.recentCases_block}>
      <div className={style.recentCases_block_h4}>
        <h4>НЕЩОДАВНІ КЕЙСИ</h4>
        <ButtonMore img={triangleImg} />
      </div>

      <div className={style.recentCases_block_All_content}>
        {data.map((i) => (
          <RecentContent img={i.img} text={i.text} date={i.date} buttonText={i.buttonText} />
        ))}
      </div>
    </div>
  );
};

export default RecentСases;
