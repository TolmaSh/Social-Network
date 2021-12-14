import React from "react";
import banner from "../../assets/social-banner.jpg";
import s from "./Main.module.scss"
import {Profile} from "./Profile/Profile";
import {
    Routes,
    Route
} from "react-router-dom";
export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <img src={banner} alt="banner"/>
                <div>
                    <Routes>
                        <Route path="/" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}