import React from "react";
import { Provider } from "react-redux";
import { RoutesList } from "./router/route";
import { alertOptions } from "./constants/libs/alert-options";
import { Provider as AlertProvider } from "react-alert";
import { queryClient } from "./services/queryClients";
import { QueryClientProvider } from "react-query";
import { AlertTemplate } from "./components/AlertTemplate/alert-template";
import store from "./store/store";
import "./styles/index.scss";

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RoutesList />
        </Provider>
      </QueryClientProvider>
    </AlertProvider>
  );
}

export default App;
