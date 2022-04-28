/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingPage } from "./LoadingPage";
import { InitialStatePage } from "./InitialStatePage";
import "./style.css";
import { User } from "./User";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { UserNotFound } from "./UserNotFound";

export const Main = () => {
  const { state } = useContext(GlobalContext);

  const { search, loading, error, user } = state;

  console.log(state);

  if (!search.length) {
    return <InitialStatePage />;
  } else if (error) {
    return <h1>{error}</h1>;
  } else if (!loading) {
    return <LoadingPage />;
  } else if (user.message) {
    return <UserNotFound />;
  } else {
    return <User />;
  }
};
