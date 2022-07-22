import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import NavBar from "../src/commons/NavBar"

ReactDOM.render(
    <React.StrictMode>
        <NavBar></NavBar>
        <App></App>
    </React.StrictMode>
    ,
document.getElementById("root"));