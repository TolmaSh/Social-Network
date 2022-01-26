import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, changeNewPost, stateType} from "./store/state";

export const RenderThree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPost={state.profilePage.newPost} changeNewPost={changeNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};