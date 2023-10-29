import { useState } from "react";
import style from "./style/style.module.scss";

import MEGOGO from "../../assets/img/partners/MEGOGO.png";
import NIVEAMEN from "../../assets/img/partners/NIVEAMEN.png";
import TUC from "../../assets/img/partners/TUC.png";
import LION from "../../assets/img/partners/LION.png";
import HALLS from "../../assets/img/partners/HALLS.png";
import philips from "../../assets/img/partners/philips.png";
import haval from "../../assets/img/partners/haval.png";
import OurPartnersBlock from "./OurPartnersBlock";

const OurPartners = () => {
  const [data] = useState([MEGOGO, NIVEAMEN, TUC, LION, HALLS, philips, haval]);
  return (
    <div className={style.ourPartners}>
      <h4>НАШІ ПАРТНЕРИ</h4>
      <div className={style.ourPartners_imgBlock}>
        {data.map((i, index) => (
          <OurPartnersBlock key={index} img={i} />
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
