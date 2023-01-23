import React from 'react';
import s from './ProfileUser.module.scss'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material';
import {userDataType} from '../../../../store/profileReducer';
import {Preloader} from '../../../Utils/Preloader';

type UserPropsType = {
    usersData: userDataType
}

export const ProfileUser: React.FC<UserPropsType> = (props) => {
    const {usersData} = props
    return (
        <> {!usersData ? <Preloader/> : <Card variant="outlined" className={s.wrapper} key={usersData.userId}>
            <Avatar alt={usersData.fullName} src={usersData.photos.small}/>
            <div className={s.userInfo}>
                <Typography sx={{fontWeight: 400}}
                            variant="h5"
                            component="h2"
                            gutterBottom>{usersData.fullName}
                </Typography>
                <ul>
                    <li>Date of Birth: {usersData.aboutMe}</li>
                    <li>City: {usersData.aboutMe}</li>
                    <li>Education: {usersData.contacts.facebook}</li>
                    <li>Website:{usersData.contacts.facebook}</li>
                </ul>
            </div>
        </Card>}

        </>
    )

}