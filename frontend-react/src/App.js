import React from "react";

import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import IndexPage from "./views/IndexPage";
import TopBar from "./components/layout/TopBar";


function App() {
    return (
        <Router>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

            <TopBar />

            <Switch>
                <Route path="/">
                    <IndexPage />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;