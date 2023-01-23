import {connect} from 'react-redux';
import {rootReducerType} from '../../../store/store';
import {
    followUser,
    setPage,
    setTotalCount,
    setUsers, toggleIsFetching,
    unFollowUser,
} from '../../../store/usersReducer';
import React from 'react';
import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../../Utils/Preloader';


class UsersContainer extends React.Component<any, any> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNum: number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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

    }
}

export default connect(MapStateToProps, {
    followUser,unFollowUser,setUsers,setTotalCount,setPage,toggleIsFetching
})(UsersContainer);