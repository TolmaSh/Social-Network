import React from "react";
import s from "./ProfilePosts.module.scss"
import {Post} from "./Post/Post";
import {postType} from "../../../../store/state";



type ProfilePostsPropsType = {
    postList: postType[]
    addPost: (message: string) => void
}

export const ProfilePosts: React.FC<ProfilePostsPropsType> = ({addPost,postList}) => {
    const mappedPosts = postList.map((p: postType) => (
        <Post
            key={p.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={p}
        />
    ))
    const newPost = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        if (newPost.current) {
            addPost(newPost.current?.value)
        }
    }

    return (
        <div className={s.posts__wrapper}>
            <h2>My Posts</h2>
            <textarea ref={newPost}></textarea>
            <button onClick={onClickAddPostHandler}>Add post</button>
            {mappedPosts}
        </div>

    )
}