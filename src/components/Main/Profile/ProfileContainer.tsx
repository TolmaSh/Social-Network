import {addPostAC, updatePostTextAC} from '../../../store/profileReducer';
import {connect} from 'react-redux';
import {ProfilePage} from './ProfilePage';
import {rootReducerType} from '../../../store/store';


const mapStateToProps = (state: rootReducerType) => {
    return {
        usersData: state.profilePage.userData,
        postList: state.profilePage.postList,
        newPost: state.profilePage.newPost
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePost: (text: string) => {
            dispatch(updatePostTextAC(text))
        }
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
