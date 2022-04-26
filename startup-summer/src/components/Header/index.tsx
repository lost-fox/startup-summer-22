import "./style.css";
import logo from "../../assets/image/github_icon.png";
import { Search } from "./components/Search";

export const Header = () => {
  return (
    <div className="container-header flex">
      <div className="github-item">
        <img src={logo} alt="github_icon" />
      </div>
      <Search />
    </div>
  );
};
