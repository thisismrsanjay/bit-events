import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

import ScrollToTop from './app/common/ScrollToTop';
import  FlashMessages  from "./app/common/FlashMessages";


import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from './app/reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
      <FlashMessages />
      <App />
    </ScrollToTop>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
