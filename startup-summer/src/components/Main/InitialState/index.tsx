import "./style.css";
import searchImg from "../../../assets/image/search_icon.png";

export const InitialState = () => {
  return (
    <div className="initial-state">
      <img className="initial-state__img" src={searchImg} alt="search" />
      <p className="initial-state__text">Start with searching a GitHub user</p>
    </div>
  );
};
