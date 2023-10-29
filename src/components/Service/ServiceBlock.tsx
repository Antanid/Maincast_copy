import style from "./style/style.module.scss";

type ServiceBlockType = {
  img: string;
  text: string;
};

const ServiceBlock: React.FC<ServiceBlockType> = ({ img, text }) => {
  return (
    <div className={style.service_block_slide}>
      <img src={img} alt="slide img" />
      <div className={style.service_block_slide_text}>
        <h5>{text}</h5>
        <button>дізнатися більше</button>
      </div>
    </div>
  );
};

export default ServiceBlock;
