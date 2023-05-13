import React from 'react';
import s from './Messages.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import {UserList} from './UserList';
import {Avatar, Box, Button, Divider, TextField, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {messageListType, userListType} from '../../../store/dialogsReducer';
import {stringAvatar} from "../../../assets/helpers/Utils/stringAvatar";


type MessagesPropsType = {
    userList: userListType[]
    messageList: messageListType[]
    newMessageText: string
    addMessage: () => void
    updateMessage: (text: string) => void
}


export const Messages: React.FC<MessagesPropsType> = (props) => {
    const {newMessageText, userList, messageList, addMessage, updateMessage} = props
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
                <Typography className={s.post} component="span">{m.item}</Typography>
            </ListItem>
        )
    })
    const onClickAddMessage = () => {
        addMessage()
    }
    const onChangeNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateMessage(e.currentTarget.value)
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
                </List>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '700px',
                    color: 'text.secondary',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    padding: '10px',
                    '& svg': {
                        m: 0.8,
                    },
                    '& hr': {
                        mx: 0.8,
                    },
                }}>
                    <TextField value={newMessageText} onChange={onChangeNewMessage} multiline label="Write new message"
                               rows={2} fullWidth variant="standard"/>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <Button className={s.sendMessage} size="large" onClick={onClickAddMessage} variant="outlined"
                            endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )

}