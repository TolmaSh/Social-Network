import React from 'react';
import s from './Users.module.scss'
import Card from '@mui/material/Card';
import { Avatar, Button } from '@mui/material';
import {UserType} from '../../../store/usersReducer';
import axios from 'axios';
// type PropsType = {
//     users: UserType[],
//     follow: (userID: string) => void,
//     unFollow: (userID: string) => void,
//     setUsers: (users: UserType[]) => void,
// }


class Users extends React.Component<any,any> {
    stringToColor = (string: string) => {
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
    stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: this.stringToColor(name),
                width: 56,
                height: 56
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
        };
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }
    render() {
       return <div>
        <Card variant="outlined">
            <h2>Users</h2>
        </Card>
        <ul className={s.userList}>
                 {this.props.users.map( (u: UserType) => {
            const onClickFollow = () => {
                this.props.unFollow(u.id)
            }
            const onClickUnFollow = () => {
                this.props.follow(u.id)
            }
            return <li key={u.id} className={s.user} >
                <Avatar {...this.stringAvatar(u.name) } />
                <h2 className={s.userName}>{u.name}</h2>
                <h3 className={s.userStatus}>{u.status}</h3>
                { u.followed ?
                    <Button onClick={onClickFollow} variant="contained">Unfollow</Button> :
                    <Button onClick={onClickUnFollow} variant="contained">Follow</Button>
                }
            </li>
        })}
        </ul>
        </div>
    }
}
export default Users;