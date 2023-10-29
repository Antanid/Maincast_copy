import style from "./style/style.module.scss";
import { useState } from "react";


import ServiceBlock from "./ServiceBlock";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import services_camera_mob from "../../assets/img/service/services_camera_mob.png";
import services_mic_alpha from "../../assets/img/service/services_mic_alpha.png";
import service_clapper_alpha from "../../assets/img/service/service_clapper_alpha.png";
import services_headphones from "../../assets/img/service/services_headphones.png";
import playIcon from "../../assets/img/service/playIcon.png";


const Service = () => {
  const [data] = useState([
    {
      img: services_camera_mob,
      text: "Прямі трансляції",
    },
    {
      img: services_mic_alpha,
      text: "Івенти і турніри",
    },
    {
      img: service_clapper_alpha,
      text: "Maincast Originals",
    },
    {
      img: services_headphones,
      text: "Лідери думок",
    },
  ]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<div class="' + className + '">' + "</div>";
    },
  };

  return (
    <div className={style.service_block}>
      <h4>Послуги</h4>
<div className={style.service_block_slider}>
  <div className={style.service_block_slider_img}>
    <div className={style.service_block_slider_img_first}>
      <img src={playIcon} alt="play_img" />
    </div>
    <div className={style.service_block_slider_img_second}>
      <img src={playIcon} alt="play_img" />
    </div>
  </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        {data.map((i, index) => (
          <SwiperSlide>
            <ServiceBlock key={i.text} img={i.img} text={i.text} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Service;
