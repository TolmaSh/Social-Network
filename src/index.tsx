import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, changeNewPost, state, subscribe} from "./store/state";


export const RenderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPost={state.profilePage.newPost} changeNewPost={changeNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


RenderThree();
subscribe(RenderThree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
