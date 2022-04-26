import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalContext, initialState } from "./context/GlobalContext";
import { GlobalContextReducer } from "./reducer/GlobalContextReducer";

export const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(
    GlobalContextReducer,
    initialState
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Header />
      <Main />
    </GlobalContext.Provider>
  );
};

export default App;
