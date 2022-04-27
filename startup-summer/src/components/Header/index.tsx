import "./style.css";
import logo from "../../assets/image/github_icon.png";
import { Search } from "./components/Search";
import { useContext, KeyboardEvent } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { GlobalContextType } from "../../reducer/GlobalContextType";

export const Header = () => {
  const { dispatch } = useContext(GlobalContext);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = (e.target as HTMLInputElement).value;
      dispatch({ type: GlobalContextType.SEARCH, payload: search });
    }
  };

  return (
    <div className="container-header flex">
      <div className="github-item">
        <img src={logo} alt="github_icon" />
      </div>
      <Search onKeyDown={handleSearch} />
    </div>
  );
};
