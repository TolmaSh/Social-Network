import React from "react";
import s from "./Profile.module.scss"
import {User} from "./User/User";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {userDataType} from "../../../App";


export const Profile: React.FC<{usersData: userDataType}> = ({usersData}) => {
    return (
        <div className={s.wrapper}>
            <User usersData={usersData}/>
            <ProfilePosts/>
        </div>
    )
}