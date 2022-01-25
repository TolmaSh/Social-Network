import React from 'react'

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