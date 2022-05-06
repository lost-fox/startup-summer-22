import { RepositoriesFieldProps } from "../../../../../interface/RepositoriesFieldProps";
import "./style.css";

export const RepositoriesField: React.FC<RepositoriesFieldProps> = (props) => {
  const { name, html_url, description } = props.value;

  return (
    <div className="repositories-item">
      <a
        className="repositories-item__title"
        href={html_url}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <p className="repositories-item__description">{description}</p>
    </div>
  );
};
