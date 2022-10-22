import React from "react";
import { Provider } from "react-redux";
import { RoutesList } from "./router/route";
import { alertOptions } from "./constants/libs/alert-options";
import { AlertTemplate } from "./services/alertTemplate";
import { Provider as AlertProvider } from "react-alert";
import store from "./store/store";
import "./styles/index.scss";

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Provider store={store}>
        <RoutesList />
      </Provider>
    </AlertProvider>
  );
}

export default App;
