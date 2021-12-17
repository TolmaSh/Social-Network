import React from "react";
import s from "./User.module.scss"
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";

const userData = [
    {id: 1, name: "Anatoly", birth: "1 august", city: "Kiev", education: "IT-KAMASUTRA", website: "google.com"}
]

export const User = () => {
    return (
        <Card variant="outlined" className={s.wrapper}>
            <Avatar alt="Anatoly Movchan" src="/static/images/avatar/1.jpg"/>
            <div className={s.userInfo}>
                <h2>{userData[0].name}</h2>
                <ul>
                    <li>Date of Birth: {userData[0].birth}</li>
                    <li>City: {userData[0].city}</li>
                    <li>Education: {userData[0].city}</li>
                    <li>Website:{userData[0].website}</li>
                </ul>
            </div>
        </Card>
    )

}