import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";
import { GlobalContextAction } from "./GlobalContextAction";
import { GlobalContextType } from "./GlobalContextType";

interface GlobalContextReducerState {
  search: string;
  loading: boolean;
  error: string;
  user: UserType;
  repositories: RepositoriesType[];
}

export const GlobalContextReducer = (
  state: GlobalContextReducerState,
  action: GlobalContextAction
): GlobalContextReducerState => {
  const { type, payload } = action;
  switch (type) {
    case GlobalContextType.SEARCH:
      return {
        ...state,
        search: payload,
      };
    case GlobalContextType.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case GlobalContextType.ERROR:
      return {
        ...state,
        error: payload,
      };
    case GlobalContextType.USER:
      return {
        ...state,
        user: payload,
      };
    case GlobalContextType.REPOSITORIES:
      return {
        ...state,
        repositories: payload,
      };
    default:
      return state;
  }
};
