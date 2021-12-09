import React from 'react'
import s from "./Post.module.scss"

type PostPropsType = {
    postText: string
}

export const Post: React.FC<PostPropsType> = ({postText}) => {
    return (
        <div>
            <span>{postText}</span>
        </div>
    )
}