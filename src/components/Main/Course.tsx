import playBtn from "../../img/play-btn.svg";
import { IItem } from "../../interfaces";

type Props = {
  item: IItem;
};

export default function Course({ item }: Props) {
  return (
    <div
      className="course__item"
      style={{
        backgroundImage: `url(${item.url})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="course__item__info">
        <div>
          <h2>{item.name}</h2>
          <p>24 lesson</p>
        </div>
        <div>
          <img className="play-btn" src={playBtn} alt="" />
        </div>
      </div>
      <div>{item.time} min</div>
    </div>
  );
}
