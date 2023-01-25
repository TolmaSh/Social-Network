import {addPost, setProfileData, updatePostText} from '../../../store/profileReducer';
import {connect} from 'react-redux';
import {rootReducerType} from '../../../store/store';
import s from './Profile.module.scss';
import {ProfileUser} from './ProfileUser/ProfileUser';
import {ProfilePosts} from './ProfilePosts/ProfilePosts';
import React from 'react';
import axios from 'axios';
import {withRouter} from '../../Utils/WithRouter';

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        const profileId = !this.props.params.profileId ? '2' : this.props.params.profileId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => {
                this.props.setProfileData(response.data)
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
