import React from 'react';
import s from './Profile.module.scss'
import {ProfileUser} from './ProfileUser/ProfileUser';
import {ProfilePosts} from './ProfilePosts/ProfilePosts';
import {postType, userDataType} from '../../../store/profileReducer';

type PropsType = {
    usersData: userDataType[]
    postList: postType[]
    addPost: () => void
    updatePost: (text: string) => void
    newPost: string
}

export const ProfilePage = (props: PropsType) => {

    return (
        <div className={s.wrapper}>
            <ProfileUser usersData={props.usersData}/>
            <ProfilePosts postList={props.postList} newPost={props.newPost} addPost={props.addPost}
                          updatePost={props.updatePost}/>
        </div>
    )


}
