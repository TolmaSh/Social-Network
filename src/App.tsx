import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {HashRouter} from "react-router-dom";
import {stateType} from './store/state'


export type userDataType = {
    id: number
    name: string
    birth: string
    city: string
    education: string
    website: string
}
const usersData = {
    id: 1,
    name: "Anatoly Movchan",
    birth: "1 august",
    city: "Kiev",
    education: "IT-KAMASUTRA",
    website: "google.com"
}

type AppPropsType = {
    state: stateType
    addPost: (message: string) => void
    newPost: string
    changeNewPost: (newPostText: string) => void
}
function App({changeNewPost,state,newPost,addPost}:AppPropsType) {

    return (
        <HashRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main usersData={usersData} state={state} addPost={addPost} newPost={newPost} changeNewPost={changeNewPost}/>
            </div>
        </HashRouter>
    );
}

export default App;
