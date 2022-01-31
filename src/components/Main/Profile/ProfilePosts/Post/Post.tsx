import React from 'react'
import {postType} from "../../../../../store/state";
import {Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";


type PostPropsType = {
    key: number
    data: postType
}

export const Post: React.FC<PostPropsType> = ({data}) => {
    return (
        // <div>
        //
        //     <span>{data.message}</span>
        //     <span> <b>Likes:</b>  {data.likesCount}</span>
        // </div>
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    secondary={
                        <React.Fragment >

                            {data.message}
                            <Typography
                                sx={{display: 'block'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Likes - {data.likesCount}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    )
}