import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import './scss/_base.scss';
import './scss/style.scss';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
