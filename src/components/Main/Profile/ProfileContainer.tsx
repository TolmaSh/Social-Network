import {addPost, setProfileData, updatePostText} from '../../../store/profileReducer';
import {connect} from 'react-redux';
import {rootReducerType} from '../../../store/store';
import s from './Profile.module.scss';
import {ProfileUser} from './ProfileUser/ProfileUser';
import {ProfilePosts} from './ProfilePosts/ProfilePosts';
import React from 'react';
import {withRouter} from '../../Utils/WithRouter';
import {profileAPI} from "../../../Api/api";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        profileAPI.getUserProfile(this.props.params.profileId)
            .then(data => {
                this.props.setProfileData(data)
            })
    }

    render() {
        return <div className={s.wrapper}>
            <ProfileUser usersData={this.props.usersData}/>
            <ProfilePosts postList={this.props.postList} newPost={this.props.newPost} addPost={this.props.addPost}
                          updatePost={this.props.updatePostText}/>
        </div>
    }
}


const mapStateToProps = (state: rootReducerType) => {
    return {
        usersData: state.profilePage.userData,
        postList: state.profilePage.postList,
        newPost: state.profilePage.newPost
    }
}
export default connect(mapStateToProps, {addPost,updatePostText,setProfileData})(withRouter(ProfileContainer))
