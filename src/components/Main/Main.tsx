import React from 'react';
import s from './Main.module.scss'
import {ProfileContainer} from './Profile/ProfileContainer';
import {
    Routes,
    Route
} from 'react-router-dom';
import {Gallery} from './Gallery/Gallery';
import {Settings} from './Settings/Settings';
import {MessagesContainer} from './Messages/MessagesContainer';

type MainPropsType = {
    store: any
}

export const Main: React.FC<MainPropsType> = ({store}) => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <Routes>
                    <Route path="/" element={<ProfileContainer store={store}/>}/>
                    <Route path="/Messages/*"
                           element={<MessagesContainer store={store}/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}