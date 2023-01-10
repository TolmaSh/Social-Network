import React from 'react';
import s from './ProfileUser.module.scss'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material';
import {userDataType} from '../../../../store/profileReducer';

type UserPropsType = {
    usersData: userDataType[]
}

export const ProfileUser: React.FC<UserPropsType> = (props) => {
    return (
        <>
            {props.usersData.map(u => {
                return <Card variant="outlined" className={s.wrapper} key={u.id}>
                    <Avatar alt={u.name} src="/static/images/avatar/1.jpg"/>
                    <div className={s.userInfo}>
                        <Typography sx={{fontWeight: 400}}
                                    variant="h5"
                                    component="h2"
                                    gutterBottom>{u.name}
                        </Typography>
                        <ul>
                            <li>Date of Birth: {u.birth}</li>
                            <li>City: {u.city}</li>
                            <li>Education: {u.city}</li>
                            <li>Website:{u.website}</li>
                        </ul>
                    </div>
                </Card>
            })}
        </>
    )

}