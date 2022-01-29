import React from "react";
import s from "./Profile.module.scss"
import {User} from "./User/User";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import { userDataType} from "../../../App";
import {postType} from "../../../store/state";


export const Profile: React.FC<{
    usersData: userDataType
    postList: postType[]
    addPost: () => void
    newPost: string
    changeNewPost: (newPostText: string) => void
}> = ({changeNewPost,newPost,addPost,postList,usersData}) => {
    return (
        <div className={s.wrapper}>
            <User usersData={usersData}/>
            <ProfilePosts postList={postList} addPost={addPost} newPost={newPost} changeNewPost={changeNewPost}/>
        </div>
    )
}