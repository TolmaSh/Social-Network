import React from "react";
import banner from "../../assets/social-banner.jpg";
import s from "./Main.module.scss"
import {Profile} from "./Profile/Profile";

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <img src={banner} alt="banner"/>
                <div>
                    <Profile/>
                </div>
            </div>
        </main>
    );
}