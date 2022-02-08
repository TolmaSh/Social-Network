import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./store/state";


export const RenderThree = () => {
    const state = store.getState();
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} newPost={state.profilePage.newPost}
                 changeNewPost={store.changeNewPost.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


RenderThree();
store.subscribe(RenderThree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
