import { useState } from "react";
import style from "./style/style.module.scss";

import eventsAllImg from "../../assets/img/events/eventsAll.svg";
import eventsCS from "../../assets/img/events/eventsCS.svg";
import eventsDota from "../../assets/img/events/eventsDota.png";


interface EventItem {
    text: string;
    secondText: string;
    img: string;
    bgImg: string;
  }
  
  interface Events {
    All: EventItem[];
    CS2: EventItem[];
    DOTA2: EventItem[];
  }
  type EventCategory = 'All' | 'CS2' | 'DOTA2';

const FutureEvents = () => {
  const [futureLogo] = useState([
    {
      img: eventsAllImg,
      text: "All",
    },
    {
      img: eventsCS,
      text: "CS2",
    },
    {
      img: eventsDota,
      text: "DOTA2",
    },
  ]);
  const [selected, setSelected] = useState<EventCategory>("All");

  const [data] = useState <Events>({
    All: [
      {
        text: "COMPASS FALL 2023",
        secondText: "Contenders stage, Main stage, Playoffs",
        img: "https://tools.gamelife.org/uploads/league/logo/388/1697445809_compass-rt24-vertical.png",
        bgImg: 'https://ggscore.com/media/tournament/e7588.png'
      },
      {
        text: "THE INTERNATIONAL 2023",
        secondText: "Main Event",
        img: "https://tools.gamelife.org/uploads/league/logo/383/1694865621_TI-logo.png",
        bgImg: 'https://clan.cloudflare.steamstatic.com/images/3703047/f02b91fbac5c245039b252487d3a72eb10aba13e.png'
      },
      {
        text: "ESL IMPACT LEAGUE SEASON 4",
        secondText: "European Division",
        img: "https://tools.gamelife.org/uploads/league/logo/378/1694603317_DHUB-2096_ESL_IMPACT_EU_LEAGUE_negative.png",
        bgImg: 'https://i.computer-bild.de/imgs/1/4/3/8/2/9/8/3/csgo-esl-impact-1-886db281db2474ca.png?impolicy=full_content'
      },
    ],
    CS2: [
      {
        text: "COMPASS FALL 2023",
        secondText: "Contenders stage, Main stage, Playoffs",
        img: "https://tools.gamelife.org/uploads/league/logo/388/1697445809_compass-rt24-vertical.png",
        bgImg: 'https://ggscore.com/media/tournament/e7588.png'
      },
      {
        text: "ESL IMPACT LEAGUE SEASON 4",
        secondText: "European Division",
        img: "https://tools.gamelife.org/uploads/league/logo/378/1694603317_DHUB-2096_ESL_IMPACT_EU_LEAGUE_negative.png",
        bgImg: 'https://i.computer-bild.de/imgs/1/4/3/8/2/9/8/3/csgo-esl-impact-1-886db281db2474ca.png?impolicy=full_content'
      },
    ],
    DOTA2: [
      {
        text: "THE INTERNATIONAL 2023",
        secondText: "Main Event",
        img: "https://tools.gamelife.org/uploads/league/logo/383/1694865621_TI-logo.png",
        bgImg: 'https://clan.cloudflare.steamstatic.com/images/3703047/f02b91fbac5c245039b252487d3a72eb10aba13e.png'
      }
    ],
  });

  console.log(data["All"]);

  function onChangeCategories(text: any) {
    setSelected(text);
  }
  return (
    <div className={style.future_events}>
      <h2 className={style.future_events_firstText}>МАЙБУТНІ ПОДІЇ</h2>

      <div className={style.future_events_sort}>
        <ul>
          {futureLogo.map((i) => (
            <li
              onClick={() => onChangeCategories(i.text)}
              key={i.text}
              className={i.text === selected ? style.future_events_sort_li : ""}
            >
              <img src={i.img} alt={i.text} />
              <p>{i.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.future_events_block}>
        {data[selected].map((i: EventItem, index) => (
          <div 
          key={index}
           className={style.future_events_block_main}
           style={{
            backgroundImage: `url(${i.bgImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
           }}
           >
            <img src={i.img} alt="s" />
            <div className={style.future_events_block_main_text}>
              <h4>{i.text}</h4>
              <p>{i.secondText}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureEvents;
