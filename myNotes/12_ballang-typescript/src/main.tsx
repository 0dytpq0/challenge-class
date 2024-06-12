import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 컴퓨터는 모르지만 우리는 div root가 있을 것을 알기에 as를 썻다.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
