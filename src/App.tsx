import React from 'react';
import './App.css';
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {

    return (
        <HashRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <Navigation/>
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
