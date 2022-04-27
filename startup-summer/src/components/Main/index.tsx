/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingPage } from "./LoadingPage";
import { InitialStatePage } from "./InitialStatePage";
import "./style.css";
import { User } from "./User";
import { UserNotFound } from "./UserNotFound";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { getData } from "../../api/getData";
import { RepositoriesType } from "../../interface/RepositoriesType";
import { UserType } from "../../interface/UserType";
import { GlobalContextType } from "../../reducer/GlobalContextType";

export const Main = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<any>(null);
  const [isLoaded, setLoad] = useState(false);

  const { search } = state;

  const getUserData = async () => {
    const urlUser = `https://api.github.com/users/${search}`;
    const urlRepositories = `https://api.github.com/users/${search}/repos`;

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
  };

  if (!search.length) {
    return <InitialStatePage />;
  } else if (error) {
    return <h1>{error.message}</h1>;
  } else if (!isLoaded) {
    getUserData();
    return <LoadingPage />;
  } else {
    return <User />;
  }
};
