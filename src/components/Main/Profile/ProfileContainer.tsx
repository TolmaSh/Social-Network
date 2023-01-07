import React from 'react';
import s from './Profile.module.scss'
import {User} from './User/User';
import {ProfilePosts} from './ProfilePosts/ProfilePosts';
import {ProfilePageType} from '../../../store/store';
import {addPostAC, updatePostTextAC} from '../../../store/profileReducer';
import StoreContext from '../../../StoreContext';


export const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state: ProfilePageType = store.getState().profilePage
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const updatePost = (text: string) => {
                        store.dispatch(updatePostTextAC(text))
                    }
                    return (
                        <div className={s.wrapper}>
                            <User usersData={state.userData}/>
                            <ProfilePosts postList={state.postList} newPost={state.newPost} addPost={addPost}
                                          updatePost={updatePost}/>
                        </div>
                    )
                }
            }

        </StoreContext.Consumer>

    )

}