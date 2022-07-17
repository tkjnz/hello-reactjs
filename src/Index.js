import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root.js";
import { Provider } from 'react-redux';
import { store, persistor } from './ConfigureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>, document.getElementById("App"));
