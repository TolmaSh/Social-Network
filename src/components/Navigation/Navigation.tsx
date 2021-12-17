import React from "react";
import s from "./Navigation.module.scss";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import {ListItem, ListItemButton} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import deepOrange from "@mui/material/colors/deepOrange";
import ListItemText from "@mui/material/ListItemText";
type navListType = {
    id: number
    item: string
    way: string
}
const navList: Array<navListType> = [
    {id: 0, item: 'Home', way: '/'},
    {id: 1, item: 'Messages', way: '/Messages'},
    {id: 2, item: 'Gallery', way: '/Gallery'},
    {id: 3, item: 'Settings', way: '/Settings'},
    {id: 4, item: 'Logout', way: '/logout'},
]
export const Navigation = () => {
    return <nav className={s.navigation}>

        <div className={s.content}>
            <div className={s.item}>
                <h2 className={s.title}>
                    New Feeds
                </h2>
                {/*<ul className={s.list}>*/}
                    <List className={s.list}>
                        {navList.map((val) => {
                            return (
                                <ListItem>
                                    <NavLink to={val.way} className={ ({isActive})  => isActive ? `${s.list_item} ${s.active}` : `${s.list_item}`}>
                                    <ListItemButton className={s.list_btn}>
                                        <ListItemAvatar>
                                            <Avatar sx={{bgcolor: deepOrange[500]}}>
                                                <HomeWorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={val.item}
                                        />
                                    </ListItemButton>
                                    </NavLink>
                                </ListItem> );
                        })}
                    </List>
                    {/*<ListItem item={"Home"} way={"/"}/>*/}
                    {/*<ListItem item={"Messages"} way={"/Messages"}/>*/}
                    {/*<ListItem item={"Gallery"} way={"/Gallery"}/>*/}
                    {/*<ListItem item={"Settings"} way={"/Settings"}/>*/}
                    {/*<ListItem item={"Logout"} way={"/"}/>*/}
                {/*</ul>*/}
            </div>

        </div>
    </nav>;

}

// type itemPropsType = {
//     item: string
//     way: string
//
// }
// function Link(props: itemPropsType) {
//     return <li className={s.list_item}>
//         {props.item}
//     </li>
// }
