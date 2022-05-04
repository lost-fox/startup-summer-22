import { useAppSelector } from "../../../../hooks/hook";
import { Paginate } from "./Paginate";
import { RepositoriesField } from "./RepositoriesField";
import "./style.css";

export const Repositories = () => {
  const state = useAppSelector((state) => state.userReducer);
  const { user, repositories } = state;
  const { public_repos } = user;

  return (
    <div className="repositories">
      <h1 className="repositories__title">Repositories ({public_repos})</h1>
      {repositories.map((repository) => {
        return <RepositoriesField value={repository} key={repository.id} />;
      })}
      <Paginate />
    </div>
  );
};
