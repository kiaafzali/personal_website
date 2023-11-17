import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <AboutMe />
    <Experience />
    <Projects />
    <Skills />
    <App />
  </React.StrictMode>
);
