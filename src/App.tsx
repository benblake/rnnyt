import React from "react";
import { Provider } from "react-redux";
import { HomeScreen } from "./components";
import createStore from "./createStore";

const store = createStore();

export default () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);
