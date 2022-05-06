import "./style.css";
import emptyImg from "../../../../assets/image/empty_icon.png";

export const RepositoriesNotFound: React.FC = () => {
  return (
    <div className="repositories-not">
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
