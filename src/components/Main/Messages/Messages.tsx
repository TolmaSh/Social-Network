import React from "react";
import s from "./Messages.module.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import {UserList} from "./UserList";
import {messageListType, userListType} from "../../../App";


type MessagesPropsType = {
    userList: userListType[]
    messageList: messageListType[]
}

export const Messages: React.FC<MessagesPropsType> = ({userList,messageList}) => {
    const mappedUsers = userList.map((u: userListType) => (
        <UserList
            key={u.key} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={u}
        />
    ))
    const mappedMessage = messageList.map((m: messageListType) => <ListItem key={m.key}>{m.item}</ListItem>)
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} className={s.users}>
                <List>
                    {mappedUsers}
                </List>
            </Grid>
            <Grid item xs={10}>
                <List className={s.message_list}>
                    {mappedMessage}
                </List>
            </Grid>
        </Grid>
    )

}