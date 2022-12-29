import React from "react";
import s from "./User.module.scss"
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import {Typography} from "@mui/material";
import {userDataType} from '../../../../store/store';

type UserPropsType = {
    usersData: userDataType
}


export const User: React.FC<UserPropsType> = ({usersData}) => {
    return (
        <Card variant="outlined" className={s.wrapper}>
            <Avatar alt={usersData.name} src="/static/images/avatar/1.jpg"/>
            <div className={s.userInfo}>
                <Typography sx={{fontWeight: 400}}
                            variant='h5'
                            component='h2'
                            gutterBottom>{usersData.name}
                </Typography>
                <ul>
                    <li>Date of Birth: {usersData.birth}</li>
                    <li>City: {usersData.city}</li>
                    <li>Education: {usersData.city}</li>
                    <li>Website:{usersData.website}</li>
                </ul>
            </div>
        </Card>
    )

}