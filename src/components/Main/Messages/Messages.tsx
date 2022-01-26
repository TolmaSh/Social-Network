import React from "react";
import s from "./Messages.module.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import {UserList} from "./UserList";
import {messageListType, userListType} from "../../../store/state";
import {Avatar} from "@mui/material";


type MessagesPropsType = {
    userList: userListType[]
    messageList: messageListType[]
}
function stringToColor(string: string) {
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
}
function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
    };
}

export const Messages: React.FC<MessagesPropsType> = ({userList, messageList}) => {
    const mappedUsers = userList.map((u: userListType) => (
        <UserList
            key={u.key} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={u}
        />
    ))
    const mappedMessage = messageList.map((m: messageListType) => {
        console.log(m.item)
        return (
            <ListItem key={m.key} className={s.message__list_item}>
                <Avatar {...stringAvatar(m.item)}/>
                <span className={s.post}>{m.item}</span>
            </ListItem>
        )
    })

    return (
        <Grid container spacing={2}>
            <Grid item xs={2} className={s.users}>
                <List>
                    {mappedUsers}
                </List>
            </Grid>
            <Grid item xs={10}>
                <List className={s.message__list}>
                    {mappedMessage}
                </List>
            </Grid>
        </Grid>
    )

}