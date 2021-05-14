import React from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>Edit 2and save to reload.as</p>
                <Button type="primary">Primary Button</Button>
            </header>
        </div>
    );
}

export default App;
