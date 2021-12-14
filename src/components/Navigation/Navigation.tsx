import React from "react";
import s from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";


export const Navigation = () => {
    return <nav className={s.navigation}>

        <div className={s.content}>
            <div className={s.item}>
                <h2 className={s.title}>
                    New Feeds
                </h2>
                <ul className={s.list}>
                    <ListItem item={"Home"} way={"/"}/>
                    <ListItem item={"Messages"} way={"/Messages"}/>
                    <ListItem item={"Gallery"} way={"/Gallery"}/>
                    <ListItem item={"Settings"} way={"/Settings"}/>
                    <ListItem item={"Logout"} way={"/"}/>
                </ul>
            </div>

        </div>
    </nav>;

}

type itemPropsType = {
    item: string
    way: string
}
function ListItem(props: itemPropsType) {
    return <li className={s.list_item}>
        <NavLink to={props.way}>{props.item}</NavLink>
    </li>
}
