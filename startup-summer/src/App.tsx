import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./state";

export const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
