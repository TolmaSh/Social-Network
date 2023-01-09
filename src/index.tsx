import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/redux-store";
import {Provider} from 'react-redux';




export const RenderThree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


RenderThree();
store.subscribe( () => {
    RenderThree()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
