import style from "./style/style.module.scss";

type OurPartnersType = {
  img: string;
};

const OurPartnersBlock: React.FC<OurPartnersType> = ({ img }) => {
  return (
    <div className={style.ourPartners_img}>
      <img src={img} alt="partnersImg" />
    </div>
  );
};

export default OurPartnersBlock;
