import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import "bootswatch/dist/minty/bootstrap.min.css"; // Import the Minty theme Boostwacth//
import store from "./redux/app/store.js"; // Store Redux //

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
