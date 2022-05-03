import { useAppSelector } from "../../../../hooks/hook";
import { RepositoriesField } from "./RepositoriesField";
import "./style.css";

export const Repositories = () => {
  const state = useAppSelector((state) => state.userReducer);
  const { repositories } = state;

  return (
    <div className="repositories">
      <h1 className="repositories__title">
        Repositories ({repositories.length})
      </h1>
      {repositories.map((repository) => {
        return <RepositoriesField value={repository} key={repository.id} />;
      })}
    </div>
  );
};
