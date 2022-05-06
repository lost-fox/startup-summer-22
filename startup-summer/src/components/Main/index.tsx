import { LoadingPage } from "./LoadingPage";
import { InitialStatePage } from "./InitialStatePage";
import "./style.css";
import { User } from "./User";
import { UserNotFound } from "./UserNotFound";
import { useAppSelector } from "../../hooks/hook";
import { ErrorPage } from "./ErrorPage";

export const Main: React.FC = () => {
  const state = useAppSelector((state) => state.userReducer);
  const { search, loading, error, user } = state;

  if (!search.length) {
    return <InitialStatePage />;
  } else if (error) {
    return <ErrorPage error={error} />;
  } else if (loading) {
    return <LoadingPage />;
  } else if (user.message) {
    return <UserNotFound />;
  }
  return <User />;
};
