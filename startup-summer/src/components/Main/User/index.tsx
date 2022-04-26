import "./style.css";
import followersImg from "../../../assets/image/followers_icon.png";
import followingImg from "../../../assets/image/following_icon.png";
import { FollowItem } from "./FollowItem";
// import { Repositories } from "./Repositories";
import { RepositoriesNotFound } from "./RepositoriesNotFound";

export const User = () => {
  return (
    <div className="conteiner-user flex">
      <div className="personal-info">
        <div className="personal-info__img">
          <img
            className="personal-info__img-avatar"
            src="https://illustrators.ru/imgproxy/7QXI9_fOkcJXl2N_Atlg4E3UXmRdgdj3zoaCSg32qFo/rs:fit:700:1800/aHR0cHM6Ly9pbGx1/c3RyYXRvcnMucnUv/dXBsb2Fkcy9pbGx1/c3RyYXRpb24vaW1h/Z2UvMTUwNDE0Ny8l/RDAlQTQlRDElODMl/RDElODAlRDAlQjgl/RDElOEZfJUQwJTlC/JUQwJUJFJUQwJUIz/JUQwJUJFJUQxJTgy/JUQwJUI4JUQwJUJG/Xy5qcGc"
            alt="avatar"
          />
        </div>
        <h2 className="personal-info__name"> Dan Abramov</h2>
        <a className="personal-info__github" href="#">
          gaearon
        </a>
        <div className="personal-info__follow flex">
          <FollowItem
            classImg="personal-info__followers-img"
            img={followersImg}
            name="followers"
            count="65.8k"
          />
          <FollowItem
            classImg="personal-info__following-img"
            img={followingImg}
            name="following"
            count="171"
          />
        </div>
      </div>
      <RepositoriesNotFound />
      {/* <Repositories /> */}
    </div>
  );
};
