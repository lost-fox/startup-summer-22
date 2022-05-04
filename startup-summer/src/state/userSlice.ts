/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/getData";
import { INITIAL_USER, INITIAL_REPOSITORIES } from "../constants";
import { RepositoriesType } from "../interface/RepositoriesType";
import { UserType } from "../interface/UserType";

interface InitialStateType {
  search: string;
  loading: boolean;
  error: string;
  user: UserType;
  repositories: RepositoriesType[];
  currentPage: number;
  perPage: number;
}
interface ErrorMessage {
  message: string;
}

interface GetUserDataType {
  search: string;
}

const initialState: InitialStateType = {
  search: "",
  loading: false,
  error: "",
  user: INITIAL_USER,
  repositories: INITIAL_REPOSITORIES,
  currentPage: 1,
  perPage: 1,
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
        `https://api.github.com/users/${search}/repos?page=1&per_page=4`
      );
      dispatch(setUser(dataUser));
      dispatch(setRepositories(dataRepositories));
    } catch (error: any) {
      return rejectWithValue(error);
    }
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

export const { setSearch, setUser, setRepositories, setError } =
  userSlice.actions;
export default userSlice.reducer;
