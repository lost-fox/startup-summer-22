import "./style.css";
import errorImg from "../../../assets/image/error.gif";
import { ErrorPageProps } from "../../../interface/ErrorPageProps";

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { error } = props;
  return (
    <div className="error-container">
      <h1 className="error-title">Error: {error} </h1>
      <img className="error-img" src={errorImg} alt="error" />
    </div>
  );
};
