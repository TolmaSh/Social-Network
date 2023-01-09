import React from 'react';
import {StateType} from '../../../store/store';
import {addPostAC, updatePostTextAC} from '../../../store/profileReducer';
import {connect} from 'react-redux';
import {ProfilePage} from './ProfilePage';




const mapStateToProps = (state:StateType) => {
    return {
        usersData: state.profilePage.userData,
        postList: state.profilePage.postList,
        newPost: state.profilePage.newPost
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updatePost: (text:string) => {dispatch(updatePostTextAC(text))}
    }
}
export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePage)
