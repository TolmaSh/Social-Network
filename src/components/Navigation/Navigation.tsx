import React from "react";
import s from "./Navigation.module.scss";



export const Navigation = () => {
    return  <nav className={s.navigation}>

        <div className={s.content}>
            <div className={s.item}>
                <h2 className={s.title}>
                    New Feeds
                </h2>
                <ul className={s.list}>
                    <ListItem item={"Home"}/>
                    <ListItem item={"Message"}/>
                    <ListItem item={"Gallery"}/>
                    <ListItem item={"Settings"}/>
                    <ListItem item={"Logout"}/>
                </ul>
            </div>
            <div className={s.item}>
                <h2 className={s.title}>
                    Account
                </h2>
                <ul className={s.list}>
                    <ListItem item={"Home"}/>
                    <ListItem item={"Message"}/>
                    <ListItem item={"Gallery"}/>
                    <ListItem item={"Settings"}/>
                    <ListItem item={"Logout"}/>
                </ul>
            </div>
        </div>
    </nav>
}

type itemPropsType = {
    item: string
}
function ListItem(props: itemPropsType) {
    return <li className={s.list_item}>{props.item}</li>
}
