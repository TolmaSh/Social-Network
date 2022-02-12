import React from "react";
import s from "./Profile.module.scss"
import {User} from "./User/User";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {userDataType} from "../../../App";
import {ActionTypes, postType} from "../../../store/state";


export const Profile: React.FC<{
    usersData: userDataType
    postList: postType[]
    dispatch: (action: ActionTypes) => void
    newPost: string
}> = ({dispatch, newPost, postList, usersData}) => {
    return (
        <div className={s.wrapper}>
            <User usersData={usersData}/>
            <ProfilePosts postList={postList} dispatch={dispatch} newPost={newPost}/>
        </div>
    )
}