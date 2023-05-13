import {connect} from 'react-redux';
import {rootReducerType} from '../../../store/store';
import {
    followUser,
    setPage,
    setTotalCount,
    setUsers, toggleIsFetching, toggleIsFollowingStatus,
    unFollowUser,
} from '../../../store/usersReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../../../assets/helpers/Utils/Preloader';
import {usersAPI} from "../../../assets/API/api";


class UsersContainer extends React.Component<any, any> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.page,this.props.count)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNum: number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNum)
            usersAPI.getUsers(pageNum,this.props.count)
                .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalCount={this.props.totalCount}
                                                           count={this.props.count}
                                                           onPageChanged={this.onPageChanged}
                                                           page={this.props.page}
                                                           users={this.props.users}
                                                           follow={this.props.followUser}
                                                           unFollow={this.props.unFollowUser}
                                                           followingStatus={this.props.followingStatus}
                                                           toggleIsFollowingStatus={this.props.toggleIsFollowingStatus}
            />}
        </>
    }
}


const MapStateToProps = (state: rootReducerType) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        page: state.usersPage.page,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingStatus: state.usersPage.followingStatus

    }
}

export default connect(MapStateToProps, {
    followUser,unFollowUser,setUsers,setTotalCount,setPage,toggleIsFetching,toggleIsFollowingStatus
})(UsersContainer);