import "./style.css";
import { ErrorPageProps } from "../../../interface/ErrorPageProps";

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { error } = props;
  return (
    <div className="error-container">
      <h1 className="error-title">Error: {error} </h1>
      <img
        className="error-img"
        src="https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif"
        alt="error"
      />
    </div>
  );
};
