import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter} from "react-router-dom";

function App() {

    return (
        <HashRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
