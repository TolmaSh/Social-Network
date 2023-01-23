import React from 'react';
import s from './Main.module.scss'

import {
    Routes,
    Route
} from 'react-router-dom';
import {Gallery} from './Gallery/Gallery';
import {Settings} from './Settings/Settings';
import {MessagesContainer} from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';


export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <Routes>
                    <Route path="/"
                           element={<ProfileContainer/>}/>
                    <Route path="/Messages/*"
                           element={<MessagesContainer/>}/>
                    <Route path="/UsersAPIComponent/*"
                           element={<UsersContainer/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}