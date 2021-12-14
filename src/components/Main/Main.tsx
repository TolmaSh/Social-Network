import React from "react";
import banner from "../../assets/social-banner.jpg";
import s from "./Main.module.scss"
import {Profile} from "./Profile/Profile";
import {
    Routes,
    Route
} from "react-router-dom";
import {Messages} from "./Message/Message";
import { Gallery } from "./Gallery/Gallery";
import {Settings} from "./Settings/Settings";

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <img src={banner} alt="banner"/>
                <div>
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                        <Route path="/Messages" element={<Messages/>}/>
                        <Route path="/Gallery" element={<Gallery/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    );
}