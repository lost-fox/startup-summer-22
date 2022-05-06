import "./style.css";
import loadingImg from "../../../assets/image/loading.png";

export const LoadingPage: React.FC = () => {
  return <img className="loading-container" src={loadingImg} />;
};
