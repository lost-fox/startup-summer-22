import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextType } from "./GlobalContextType";

export interface GlobalContextActionUser {
  type: GlobalContextType.USER;
  payload: UserType;
}

export interface GlobalContextActionRepositories {
  type: GlobalContextType.REPOSITORIES;
  payload: RepositoriesType[] | string;
}

export type GlobalContextAction =
  | GlobalContextActionUser
  | GlobalContextActionRepositories;
