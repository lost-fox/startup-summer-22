import { createContext, Dispatch } from "react";
import {
  INITIAL_REPOSITORIES,
  INITIAL_USER,
} from "../components/Main/constants";
import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextAction } from "../reducer/GlobalContextAction";

export interface GlobalContextState {
  search: string;
  user: UserType;
  repositories: RepositoriesType[];
}

export const initialState: GlobalContextState = {
  search: "",
  user: INITIAL_USER,
  repositories: INITIAL_REPOSITORIES,
};

export const GlobalContext = createContext<{
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}>({ state: initialState, dispatch: () => null });
