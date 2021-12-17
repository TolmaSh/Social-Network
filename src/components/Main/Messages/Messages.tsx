import React from "react";
import s from "./Messages.module.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import {User} from "./User";


export type userListType = {
    key: number
    name: string
    avatar: string
}
const userList: Array<userListType> = [
    {key: 0, name: 'Anatoly', avatar: ''},
    {key: 1, name: 'Sveta', avatar: ''},
    {key: 2, name: 'Sergey', avatar: ''},
    {key: 3, name: 'Kolya', avatar: ''}

]
type messageListType = {
    key: number
    item: string
}
const messageList: Array<messageListType> = [
    {key: 0, item: "Hi , how are you?"},
    {key: 2, item: "Hey, i`m fine thank`s. What about your?"},
    {key: 3, item: "I`m fine too. What day is today?"},
    {key: 4, item: "Today is monday."},
    {key: 5, item: "Ohhh , it`s so bad."},
    {key: 6, item: "Yessss)"}
]


export const Messages = () => {
    const mappedUsers = userList.map((u: userListType) => (
        <User
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