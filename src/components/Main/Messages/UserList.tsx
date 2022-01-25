import React from "react";
import {userListType} from "../../../App";
import {NavLink} from "react-router-dom";
import s from "./Messages.module.scss";
import {ListItemButton} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import deepGreen from "@mui/material/colors/green";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

type userType = {
    data: userListType
}
export const UserList = (props: userType) => {
    const path = `/Messages/${props.data.key}`;
    return (
        <ListItem>
            <NavLink to={path}
                     className={({isActive}) => isActive ? `${s.list_item} ${s.active}` : `${s.list_item}`}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar sx={{bgcolor: deepGreen[500]}}>
                            <InsertEmoticonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.data.name}
                    />
                </ListItemButton>
            </NavLink>
        </ListItem>
    );
}