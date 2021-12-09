import React from "react";
import s from "./ProfilePosts.module.scss"
import {Post} from "./Post/Post";


export const ProfilePosts = () => {
    return (
        <div>
            <h2>My Posts</h2>
            <Post postText={"I`ts my first post"}/>
            <Post postText={"Hello, World"}/>
        </div>

    )
}