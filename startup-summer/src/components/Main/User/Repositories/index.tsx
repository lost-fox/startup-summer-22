import { RepositoriesField } from "./RepositoriesField";
import "./style.css";

export const Repositories = () => {
  return (
    <div className="repositories">
      <h1 className="repositories__title">Repositories (249)</h1>
      <RepositoriesField />
      <RepositoriesField />
    </div>
  );
};
