import { createContext, Dispatch } from "react";
import { INITIAL_REPOSITORIES, INITIAL_USER } from "../constants";
import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextAction } from "../reducer/GlobalContextAction";

export interface GlobalContextState {
  search: string;
  loading: boolean;
  error: string;
  user: UserType;
  repositories: RepositoriesType[];
}

export const initialState: GlobalContextState = {
  search: "",
  loading: false,
  error: "",
  user: INITIAL_USER,
  repositories: INITIAL_REPOSITORIES,
};

export const GlobalContext = createContext<{
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}>({ state: initialState, dispatch: () => null });
