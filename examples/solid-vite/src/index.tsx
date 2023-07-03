/* @refresh reload */
import { render } from "solid-js/web";
import "./polyfill"; // ! register polyfill before any other imports

import App from "./App";
import "./index.css";

render(() => <App />, document.getElementById("root")!);
