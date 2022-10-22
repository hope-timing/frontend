import React from "react";
import { Provider } from "react-redux";
import { RoutesList } from "./router/route";
import { alertOptions } from "./constants/libs/alert-options";
import { AlertTemplate } from "./services/alertTemplate";
import { Provider as AlertProvider } from "react-alert";
import { queryClient } from "./services/queryClients";
import { QueryClientProvider } from "react-query";
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
