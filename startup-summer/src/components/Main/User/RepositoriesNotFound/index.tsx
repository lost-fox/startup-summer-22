import "./style.css";
import emptyImg from "../../../../assets/image/empty_icon.png";

export const RepositoriesNotFound = () => {
  return (
    <div className="repositories">
      <div className="repositories-empty">
        <img
          className="repositories-empty__img"
          src={emptyImg}
          alt="empty icon"
        />
        <p className="repositories-empty__text">Repository list is empty</p>
      </div>
    </div>
  );
};
