import React from 'react';
import Card from '@mui/material/Card';
import s from './Users.module.scss';
import {UserType} from '../../../store/usersReducer';
import {Avatar, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import axios from "axios";

type PropsType = {
    totalCount: number
    count: number
    onPageChanged: (pageNum: number) => void
    page: number
    users: UserType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
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
    const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        return color;
    };
    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: 56,
                height: 56,
            },
            children: `${name.split(' ')[0][0].toUpperCase()}${name.split(' ')[0][1].toUpperCase()}`,
        };
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
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '54a995e8-0f3d-4b8e-8429-66cab06331be'
                            }

                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    unFollow(u.id)
                                }
                            })
                    }
                    const onClickUnFollow = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '54a995e8-0f3d-4b8e-8429-66cab06331be'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    follow(u.id)
                                }
                            })
                    }

                    return <li key={u.id} className={s.user}>
                        <Avatar {...stringAvatar(u.name)} src={u.photos.large !== null ? u.photos.large : ''}
                                alt={u.name}/>
                        <h2 className={s.userName}>{u.name}</h2>
                        <h3 className={s.userStatus}>{u.status ? u.status : 'User don`t have status'}</h3>
                        <div className={s.buttonsWrapper}>
                            {u.followed ?
                                <Button onClick={onClickFollow} variant="contained">Unfollow</Button> :
                                <Button onClick={onClickUnFollow} variant="contained">Follow</Button>
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
