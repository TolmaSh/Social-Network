import Avatar from "@mui/material/Avatar";
import React from "react";
import s from "./User.module.scss"

export const User = () => {
    return (
        <div className={s.wrapper}>
            <Avatar alt="Anatoly Movchan" src="/static/images/avatar/1.jpg" />
            <div className={s.userInfo}>
                <h2>Anatoly</h2>
                <ul>
                    <li>Date of Birth: 1 august</li>
                    <li>City: Kiev</li>
                    <li>Education: IT-KAMASUTRA</li>
                    <li>Website: google.com</li>
                </ul>
            </div>
        </div>
    )

}