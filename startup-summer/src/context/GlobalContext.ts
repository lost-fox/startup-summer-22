import { createContext, Dispatch } from "react";
import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextAction } from "../reducer/GlobalContextAction";

export interface GlobalContextState {
  user: UserType | string;
  repositories: RepositoriesType[] | string;
}

export const initialState: GlobalContextState = {
  user: "",
  repositories: "",
};

export const GlobalContext = createContext<{
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}>({ state: initialState, dispatch: () => null });
