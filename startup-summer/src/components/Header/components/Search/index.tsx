import "./style.css";
import searchLogo from "../../../../assets/image/search_icon.png";

export const Search = () => {
  return (
    <div className="search-item">
      <img className="search-item__logo" src={searchLogo} alt="search logo" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter GitHub username"
      />
    </div>
  );
};
