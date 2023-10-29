import style from "./style/style.module.scss";

type RecentСasesContentType = {
  img: string;
  text: string;
  date: string;
  buttonText: string;
};

const RecentContent: React.FC<RecentСasesContentType> = ({ img, text, date, buttonText }) => {
  return (
    <div className={style.recentCases_block_content}>
      <img
        src={img}
        alt={text}
      />
      <p>
{text}
      </p>
      <div className={style.recentCases_block_content_data}>
        <p>{date}</p>
        <div className={style.recentCases_block_content_data_news}>
          <p>{buttonText}</p>
          <div className={style.recentCases_block_content_data_news_triangle}></div>
        </div>
      </div>
    </div>
  );
};

export default RecentContent;
