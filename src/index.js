import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from './app/common/ScrollToTop';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
