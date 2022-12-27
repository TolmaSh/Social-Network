import React from 'react'
import {postType} from "../../../../../store/store";
import {Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

type PostPropsType = {
    key: number
    data: postType
}

export const Post: React.FC<PostPropsType> = ({data}) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    secondary={
                        <React.Fragment>

                            {data.message}
                            <Typography
                                sx={{display: 'block'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <ThumbUpOutlinedIcon color="primary" fontSize='small'/> - {data.likesCount}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    )
}