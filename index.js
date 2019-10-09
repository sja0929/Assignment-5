import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Demo from "./Demo";
import articles from "./data/articles.json";


ReactDOM.render(
    <App articles={Object.values(articles)} />,
    document.getElementById("root")
);

