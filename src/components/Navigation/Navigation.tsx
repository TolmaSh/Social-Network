import React from "react";
import s from "./Navigation.module.scss";



function Navigation() {
    return  <nav className={s.navigation}>
        <ul>
            <li>Home</li>
            <li>Message</li>
            <li>Gallery</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </nav>
}

export default Navigation;