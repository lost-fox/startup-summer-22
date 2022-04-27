import "./style.css";
import followersImg from "../../../assets/image/followers_icon.png";
import followingImg from "../../../assets/image/following_icon.png";
import { FollowItem } from "./FollowItem";
import { Repositories } from "./Repositories";
import { RepositoriesNotFound } from "./RepositoriesNotFound";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const User = () => {
  const { state } = useContext(GlobalContext);
  const {
    login,
    avatar_url,
    html_url,
    name,
    public_repos,
    followers,
    following,
  } = state.user;

  console.log(state);
  return (
    <div className="conteiner-user flex">
      <div className="personal-info">
        <div className="personal-info__img">
          <img
            className="personal-info__img-avatar"
            src={avatar_url}
            alt="avatar"
          />
        </div>
        <h2 className="personal-info__name"> {name}</h2>
        <a
          className="personal-info__github"
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          {login}
        </a>
        <div className="personal-info__follow flex">
          <FollowItem
            classImg="personal-info__followers-img"
            img={followersImg}
            name="followers"
            count={followers}
          />
          <FollowItem
            classImg="personal-info__following-img"
            img={followingImg}
            name="following"
            count={following}
          />
        </div>
      </div>
      {public_repos ? <Repositories /> : <RepositoriesNotFound />}
    </div>
  );
};
