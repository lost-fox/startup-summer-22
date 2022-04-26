import "./style.css";
import userImg from "../../../assets/image/user_icon.png";

export const UserNotFound = () => {
  return (
    <div className="user-not-found">
      <img className="user-not-found__img" src={userImg} alt="user icon" />
      <p className="user-not-found__text"> User not found</p>
    </div>
  );
};
