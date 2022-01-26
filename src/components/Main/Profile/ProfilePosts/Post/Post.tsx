import React from 'react'
import {postType} from "../../../../../store/state";





type PostPropsType = {
    key: number
    data: postType
}

export const Post: React.FC<PostPropsType> = ({data}) => {
    return (
        <div>

            <span>{data.message}</span>
            <span> <b>Likes:</b>  {data.likesCount}</span>
        </div>
    )
}