import React, { Fragment } from "react";
// import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import Main from "./views/Main";
import "./config/reactotron";

// import store from "./store";

const App = () => (
  // <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  // </Provider>
);

export default App;
