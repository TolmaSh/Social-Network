import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";

function App() {
    return (
    <div className="wrapper">
        <Header/>
        <Navigation/>
        <Main/>
    </div>
    );
}

export default App;
