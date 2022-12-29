import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter} from "react-router-dom";
import {ActionTypes, stateType} from './store/store'




type AppPropsType = {
    state: stateType
    dispatch: (action: ActionTypes) => void
}

function App({dispatch, state}: AppPropsType) {

    return (
        <HashRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main usersData={state.profilePage.userData[0]} state={state} dispatch={dispatch} newPost={state.profilePage.newPost}/>
            </div>
        </HashRouter>
    );
}

export default App;
