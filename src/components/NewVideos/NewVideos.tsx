import style from "./style/style.module.scss";

import triangleImg from "../../assets/img/recentСases/triangleImg.svg";
import ButtonMore from "../ButtonMore/ButtonMore";

const NewVideos = () => {
  return (
    <div className={style.new_videos}>
      <h4 className={style.new_videos_h4}>НАЙСВІЖІШІ ВІДЕО</h4>
      <ButtonMore img={triangleImg} />
    </div>
  );
};

export default NewVideos;
