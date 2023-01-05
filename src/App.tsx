import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter} from "react-router-dom";
import {StateType} from './store/store'




type AppPropsType = {
    state: StateType
    store: any
}

function App({store, state}: AppPropsType) {

    return (
        <HashRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main store={store}/>
            </div>
        </HashRouter>
    );
}

export default App;
