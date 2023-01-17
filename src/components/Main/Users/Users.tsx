import React from 'react';
import s from './Users.module.scss'
import Card from '@mui/material/Card';
import { Avatar, Button } from '@mui/material';
import {UserType} from '../../../store/usersReducer';
import axios from 'axios';
export const stringToColor = (string: string) => {
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
    /* eslint-enable no-bitwise */

    return color;
};

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 56,
            height: 56
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
    };
}


type PropsType = {
    users: UserType[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}
const Users: React.FC<PropsType> = (props) => {
    const {users,follow,unFollow,setUsers} = props
    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger
                setUsers(response.data.items)
            })

    }
    const mappedUsers = users.map(u=> {
            const onClickFollow = () => {
                unFollow(u.id)
            }
            const onClickUnFollow = () => {
                follow(u.id)
            }
            return <li key={u.id} className={s.user} >
                <Avatar {...stringAvatar(u.name) } />
                <h2 className={s.userName}>{u.name}</h2>
                <h3 className={s.userStatus}>{u.status}</h3>
                { u.followed ?
                    <Button onClick={onClickFollow} variant="contained">Unfollow</Button> :
                    <Button onClick={onClickUnFollow} variant="contained">Follow</Button>
                }
            </li>
        })
    return (
        <div>
            <Card variant="outlined">
                <h2>Users</h2>
            </Card>
            <ul className={s.userList}>
                {mappedUsers}
            </ul>
        </div>
    );
};

export default Users;