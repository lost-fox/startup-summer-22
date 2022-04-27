/* eslint-disable @typescript-eslint/no-explicit-any */
import "./style.css";
import logo from "../../assets/image/github_icon.png";
import { Search } from "./components/Search";
import React, { useContext, KeyboardEvent, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { getData } from "../../api/getData";
import { GlobalContextType } from "../../reducer/GlobalContextType";
import { UserType } from "../../interface/UserType";
import { RepositoriesType } from "../../interface/RepositoriesType";

export const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<any>(null);
  const [isLoaded, setLoad] = useState(false);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = e.target as HTMLInputElement;
      const urlUser = `https://api.github.com/users/${search.value}`;
      const urlRepositories = `https://api.github.com/users/${search.value}/repos`;
      setLoad(true);
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
      } catch (error) {
        setError(error);
      }
    }
  };

  console.log(state);
  return (
    <div className="container-header flex">
      <div className="github-item">
        <img src={logo} alt="github_icon" />
      </div>
      <Search onKeyDown={handleSearch} />
    </div>
  );
};
