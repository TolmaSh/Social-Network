import React from 'react';
import Card from '@mui/material/Card';
import s from './Users.module.scss';
import { UserType} from '../../../store/usersReducer';
import {Avatar, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {followAPI} from "../../../assets/API/api";
import {stringAvatar} from "../../../assets/helpers/Utils/stringAvatar";

type PropsType = {
    totalCount: number
    count: number
    onPageChanged: (pageNum: number) => void
    page: number
    users: UserType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    followingStatus: number[]
    toggleIsFollowingStatus: (followingStatus: boolean, uId: number) => void
}
export const Users = (props: PropsType) => {
    const {totalCount, count, onPageChanged, page, users, follow, unFollow} = props
    const totalPageCount = Math.ceil(totalCount / count);
    let pages: number[] = [];
    for (let i = 1; i <= totalPageCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <Card variant="outlined">
                <h2>Users</h2>
            </Card>
            <ul className={s.pagination}>
                {pages.map(p => {
                    return <li onClick={() => onPageChanged(p)} key={p}>{page === p ? <b>{p}</b> : p}</li>
                })}
            </ul>

            <ul className={s.userList}>
                {users.map((u: UserType) => {
                    const onClickFollow = () => {
                        props.toggleIsFollowingStatus(true, +u.id)
                        followAPI.unFollowUser(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    unFollow(u.id)
                                }
                                props.toggleIsFollowingStatus(false, +u.id)
                            })
                    }
                    const onClickUnFollow = () => {
                        props.toggleIsFollowingStatus(true, +u.id)
                        followAPI.followUser(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    follow(u.id)
                                }
                                props.toggleIsFollowingStatus(false, +u.id)
                            })
                    }
                    return <li key={u.id} className={s.user}>
                        <Avatar {...stringAvatar(u.name)} src={u.photos.large !== null ? u.photos.large : ''}
                                alt={u.name}/>
                        <h2 className={s.userName}>{u.name}</h2>
                        <h3 className={s.userStatus}>{u.status ? u.status : 'User don`t have status'}</h3>
                        <div className={s.buttonsWrapper}>
                            {u.followed ?
                                <Button disabled={props.followingStatus.some(id => id === +u.id)} onClick={onClickFollow} variant="contained" size={"small"}>Unfollow</Button> :
                                <Button disabled={props.followingStatus.some(id => id === +u.id)} onClick={onClickUnFollow} variant="contained" size={"small"}>Follow</Button>
                            }
                            <NavLink to={`/Profile/${u.id}`} className={s.profileBtn}>
                                <Button variant="contained">Profile</Button>
                            </NavLink>
                        </div>


                    </li>
                })}
            </ul>
        </div>
    )
};
