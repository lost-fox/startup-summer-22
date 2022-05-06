import "./style.css";
import logo from "../../assets/image/github_icon.png";
import { Search } from "./components/Search";
import { KeyboardEvent } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { getUserData, setSearch } from "../../state/userSlice";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = (e.target as HTMLInputElement).value;
      dispatch(setSearch(search));
      dispatch(getUserData({ search }));
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
