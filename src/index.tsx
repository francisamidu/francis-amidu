/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "@/App";
import "./index.css";
import "@fontsource-variable/rubik";
import Projects from "./components/Projects";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/projects" component={Projects} />
    </Router>
  ),
  root!
);
