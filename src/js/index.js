import React from "react";
import { render } from "react-dom";
import store from "./store/index";

import Root from "./components/Root";

render(
    <Root store={store} />
    ,
    document.getElementById("app")
);