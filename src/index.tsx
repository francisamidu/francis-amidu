/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "@/App";
import "./index.css";
import "@fontsource-variable/rubik";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Router>
  ),
  root!
);
