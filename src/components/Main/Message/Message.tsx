import React from "react";
import s from "./Messages.module.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import deepGreen from "@mui/material/colors/green";
import {Box, ListItemButton} from "@mui/material";
import Grid from '@mui/material/Grid';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {NavLink} from "react-router-dom";

type userListType = {
    key: number
    name: string
    avatar: string
    way: string
}
const userList: Array<userListType> = [
    {key: 0, name: 'Anatoly', avatar: '', way: `/Messages/1`},
    {key: 1, name: 'Sveta', avatar: '', way: `/Messages/2`},
    {key: 2, name: 'Sergey', avatar: '', way: `/Messages/3`},
    {key: 3, name: 'Kolya', avatar: '', way: `/Messages/4`}

]


export const Messages = () => {
    const [secondary, setSecondary] = React.useState(false);
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <List>
                        {userList.map((user) => {
                            return (
                                <ListItem>
                                    <NavLink to={user.way}
                                             className={({isActive}) => isActive ? `${s.list_item} ${s.active}` : `${s.list_item}`}>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar sx={{bgcolor: deepGreen[500]}}>
                                                    <InsertEmoticonIcon/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={user.name}
                                                secondary={secondary ? 'Secondary text' : null}
                                            />
                                        </ListItemButton>
                                        </NavLink>
                                </ListItem>
                        );
                        })}
                        </List>
                        </Grid>
                            <Grid item xs={10}>

                                <List className={s.message_list}>
                                    <ListItem>Hi , how are you?</ListItem>
                                    <ListItem>Hey, i`m fine thank`s. What about your?</ListItem>
                                    <ListItem>I`m fine too. What day is today?</ListItem>
                                    <ListItem>Today is monday.</ListItem>
                                    <ListItem>Ohhh , it`s so bad.</ListItem>
                                    <ListItem>Yessss)</ListItem>
                                </List>
                            </Grid>
                        </Grid>
                        </Box>
                        )
                            ;
                        }