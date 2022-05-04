/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/getData";
import {
  INITIAL_USER,
  INITIAL_REPOSITORIES,
  AMOUNT_ITEM_TO_PAGE,
} from "../constants";
import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";

interface InitialStateType {
  search: string;
  loading: boolean;
  error: string;
  user: UserType;
  repositories: RepositoriesType[];
  currentPage: number;
  firstPageItem: number;
  finishPageItem: number;
}
interface ErrorMessage {
  message: string;
}

interface GetUserDataType {
  search: string;
}

interface GetNextPageType {
  search: string;
  newPage: number;
  public_repos: number;
}

const initialState: InitialStateType = {
  search: "",
  loading: false,
  error: "",
  user: INITIAL_USER,
  repositories: INITIAL_REPOSITORIES,
  currentPage: 1,
  firstPageItem: 1,
  finishPageItem: 4,
};

export const getUserData = createAsyncThunk(
  "github/getUserData",
  async (payload: GetUserDataType, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    const { search } = payload;

    try {
      const dataUser: UserType = await getData(
        `https://api.github.com/users/${search}`
      );
      const dataRepositories: RepositoriesType[] = await getData(
        `https://api.github.com/users/${search}/repos?page=1&per_page=${AMOUNT_ITEM_TO_PAGE}`
      );
      dispatch(setUser(dataUser));
      dispatch(setRepositories(dataRepositories));
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const getNextPage = createAsyncThunk(
  "github/getNextPage",
  async (payload: GetNextPageType, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { search, newPage, public_repos } = payload;

    const firstItem = newPage * AMOUNT_ITEM_TO_PAGE - 3;
    let secondItem = newPage * AMOUNT_ITEM_TO_PAGE;

    secondItem = secondItem > public_repos ? public_repos : secondItem;

    const dataRepositories: RepositoriesType[] = await getData(
      `https://api.github.com/users/${search}/repos?page=${newPage}&per_page=${AMOUNT_ITEM_TO_PAGE}`
    );

    dispatch(setRepositories(dataRepositories));
    dispatch(setCurrentPage(newPage));
    dispatch(setNumbersPage({ firstItem, secondItem }));
  }
);

const userSlice = createSlice({
  name: "githib",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setRepositories(state, action) {
      state.repositories = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setNumbersPage(state, action) {
      state.firstPageItem = action.payload.firstItem;
      state.finishPageItem = action.payload.secondItem;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getUserData.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = (payload as ErrorMessage).message;
    });
  },
});

export const {
  setSearch,
  setUser,
  setRepositories,
  setCurrentPage,
  setNumbersPage,
  setError,
} = userSlice.actions;
export default userSlice.reducer;
