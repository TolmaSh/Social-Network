import React from "react";
import s from "./User.module.scss"
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";


const userData = {
    id: 1,
    name: "Anatoly",
    birth: "1 august",
    city: "Kiev",
    education: "IT-KAMASUTRA",
    website: "google.com"
}


export const User = () => {
    return (
        <Card variant="outlined" className={s.wrapper}>
            <Avatar alt="Anatoly Movchan" src="/static/images/avatar/1.jpg"/>
            <div className={s.userInfo}>
                <h2>{userData.name}</h2>
                <ul>
                    <li>Date of Birth: {userData.birth}</li>
                    <li>City: {userData.city}</li>
                    <li>Education: {userData.city}</li>
                    <li>Website:{userData.website}</li>
                </ul>
            </div>
        </Card>
    )

}