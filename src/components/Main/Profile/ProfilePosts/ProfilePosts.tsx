import React from "react";
import s from "./ProfilePosts.module.scss"
import {Post} from "./Post/Post";
import {changeNewPost, postType} from "../../../../store/state";


type ProfilePostsPropsType = {
    postList: postType[]
    addPost: (message: string) => void
    newPost: string
    changeNewPost: (newPostText: string) => void
}

export const ProfilePosts: React.FC<ProfilePostsPropsType> = ({newPost, addPost, postList}) => {
    const mappedPosts = postList.map((p: postType) => (
        <Post
            key={p.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={p}
        />
    ))

    const onClickAddPostHandler = () => {
        addPost(newPost)
    }

    return (
        <div className={s.posts__wrapper}>
            <h2>My Posts</h2>
            <textarea value={newPost} onChange={(e) => {
                changeNewPost(e.currentTarget.value)
            }}></textarea>
            <button onClick={onClickAddPostHandler}>Add post</button>
            {mappedPosts}
        </div>

    )
}