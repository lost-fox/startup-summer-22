/* eslint-disable @typescript-eslint/no-explicit-any */
import "./style.css";
import logo from "../../assets/image/github_icon.png";
import { Search } from "./components/Search";
import { useContext, KeyboardEvent } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { GlobalContextType } from "../../reducer/GlobalContextType";
import { RepositoriesType } from "../../interface/RepositoriesType";
import { getData } from "../../api/getData";
import { UserType } from "../../interface/UserType";

export const Header = () => {
  const { dispatch } = useContext(GlobalContext);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = (e.target as HTMLInputElement).value;
      dispatch({ type: GlobalContextType.SEARCH, payload: search });
      const urlUser = `https://api.github.com/users/${search}`;
      const urlRepositories = `https://api.github.com/users/${search}/repos`;

      dispatch({ type: GlobalContextType.LOADING, payload: true });

      try {
        const dataUser: UserType = await getData(urlUser);
        dispatch({ type: GlobalContextType.USER, payload: dataUser });
        const dataRepositories: RepositoriesType[] = await getData(
          urlRepositories
        );
        dispatch({
          type: GlobalContextType.REPOSITORIES,
          payload: dataRepositories,
        });
      } catch (error: any) {
        dispatch({ type: GlobalContextType.ERROR, payload: error.message });
      }
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
