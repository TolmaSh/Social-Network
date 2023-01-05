import React from 'react';
import s from './Profile.module.scss'
import {User} from './User/User';
import {ProfilePosts} from './ProfilePosts/ProfilePosts';
import {StateType} from '../../../store/store';
import {addPostAC, updatePostTextAC} from '../../../store/profileReducer';

type PropsType = {
    store: any
}
export const ProfileContainer: React.FC<PropsType> = ({store}) => {
    const state: StateType = store.getState()
    const addPost = () => {
        store.dispatch(addPostAC())
    }
    const updatePost = (text:string) => {
        store.dispatch(updatePostTextAC(text))
    }
    return (
        <div className={s.wrapper}>
            <User usersData={state.profilePage.userData}/>
            <ProfilePosts postList={state.profilePage.postList}  newPost={state.profilePage.newPost} addPost={addPost} updatePost={updatePost}/>
        </div>
    )
}