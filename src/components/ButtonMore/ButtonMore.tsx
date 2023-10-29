import style from './style/style.module.scss';

type ButtonMoreType = {
    img: string;
}

const ButtonMore: React.FC <ButtonMoreType> = ({img}) => {
  return (
    <button className={style.button_div}>
          <h4>MORE</h4>
          <img src={img} alt="triangle_img" />
        </button>
  )
}

export default ButtonMore