import "./style.css";
import { FollowItemProps } from "../../../../interface/FollowItemProps";

export const FollowItem = (props: FollowItemProps) => {
  return (
    <div className="flex">
      <img className={props.classImg} src={props.img} alt={props.name} />
      <p className="personal-info__follow-text">
        {props.count + " " + props.name}
      </p>
    </div>
  );
};
