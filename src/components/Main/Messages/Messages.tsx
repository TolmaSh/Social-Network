import React from "react";
import s from "./Messages.module.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import {UserList} from "./UserList";
import {ActionTypes, addMessageAC, messageListType, updateMessageText, userListType} from "../../../store/state";
import {Avatar, Button, TextField, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


type MessagesPropsType = {
    userList: userListType[]
    messageList: messageListType[]
    newMessageText: string
    dispatch: (action: ActionTypes) => void
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



export const Messages: React.FC<MessagesPropsType> = ({newMessageText,userList, messageList,dispatch}) => {
    const mappedUsers = userList.map((u: userListType) => (
        <UserList
            key={u.key} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={u}
        />
    ))
    const mappedMessage = messageList.map((m: messageListType) => {
        return (
            <ListItem key={m.key} className={s.message__list_item}>
                <Avatar {...stringAvatar(m.item)}/>
                <Typography className={s.post} component='span'>{m.item}</Typography>
            </ListItem>
        )
    })
    const onClickAddMessage = () => {
        dispatch(addMessageAC())
    }
    const onChangeNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMessageText(e.currentTarget.value))
    }

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
                    <TextField value={newMessageText} onChange={onChangeNewMessage} multiline label="Write new message"
                               rows={2}/>
                    <Button onClick={onClickAddMessage} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </List>
            </Grid>
        </Grid>
    )

}