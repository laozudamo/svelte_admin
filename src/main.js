import "./app.postcss";
import "normalize.css/normalize.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
