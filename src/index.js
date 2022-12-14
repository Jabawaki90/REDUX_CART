import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import store from "./store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//toggle my cart - done
//add to cart
//control -+ quantity
