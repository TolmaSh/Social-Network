import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main/>

            </div>
        </BrowserRouter>
    );
}

export default App;
