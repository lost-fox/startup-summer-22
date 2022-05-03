import "./style.css";
import searchLogo from "../../../../assets/image/search_icon.png";
import { SearchProps } from "../../../../interface/SearchProps";

export const Search: React.FC<SearchProps> = (props) => {
  const { onKeyDown } = props;
  return (
    <div className="search-item">
      <img className="search-item__logo" src={searchLogo} alt="search logo" />
      <input
        onKeyDown={onKeyDown}
        type="text"
        name="search"
        id="search"
        placeholder="Enter GitHub username"
      />
    </div>
  );
};
