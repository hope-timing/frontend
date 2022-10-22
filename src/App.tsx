import React from "react";
import { Provider } from "react-redux";
import { RoutesList } from "./router/route";
import store from "./store/store";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <RoutesList />
    </Provider>
  );
}

export default App;
