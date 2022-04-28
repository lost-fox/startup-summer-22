import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextType } from "./GlobalContextType";

export interface GlobalContextActionSearch {
  type: GlobalContextType.SEARCH;
  payload: string;
}

export interface GlobalContextActionLoading {
  type: GlobalContextType.LOADING;
  payload: boolean;
}

export interface GlobalContextActionError {
  type: GlobalContextType.ERROR;
  payload: string;
}
export interface GlobalContextActionUser {
  type: GlobalContextType.USER;
  payload: UserType;
}

export interface GlobalContextActionRepositories {
  type: GlobalContextType.REPOSITORIES;
  payload: RepositoriesType[];
}

export type GlobalContextAction =
  | GlobalContextActionSearch
  | GlobalContextActionLoading
  | GlobalContextActionError
  | GlobalContextActionUser
  | GlobalContextActionRepositories;
