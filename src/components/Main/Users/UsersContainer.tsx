import {connect} from 'react-redux';
import Users from './Users';
import {rootReducerType} from '../../../store/store';
import {followUserAC, setUsersAC, unFollowUserAC, UserType} from '../../../store/usersReducer';
import {Dispatch} from 'redux';

const MapStateToProps = (state: rootReducerType) => {
    return {
        users: state.usersPage.users
    }
}
const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID:string) => dispatch(followUserAC(userID)),
        unFollow: (userID:string) => dispatch(unFollowUserAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))

    }
}

export const UsersContainer = connect(MapStateToProps,MapDispatchToProps)(Users)