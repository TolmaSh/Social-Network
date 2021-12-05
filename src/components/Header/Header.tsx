import logo from "../../assets/logo.png";
import React from "react";
import s from "./Header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <img className={s.logo} src={logo} alt="logo"/>
            <span>Header</span>
        </header>
    );
}

export default Header;