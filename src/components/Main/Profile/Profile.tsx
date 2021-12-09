import React from "react";
import s from "./Profile.module.scss"
import {User} from "./User/User";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";


export const Profile = () => {
    return (
        <div className={s.wrapper}>
        <User/>
        <ProfilePosts/>
        </div>
    )
}