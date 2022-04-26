import "./style.css";

export const RepositoriesField = () => {
  return (
    <div className="repositories-item">
      <a className="repositories-item__title" href="#">
        react-hot-loader
      </a>
      <p className="repositories-item__description">
        Tweak React components in real time. Deprecated: use Fast Refresh
        instead.
      </p>
    </div>
  );
};
