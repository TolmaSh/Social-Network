
import React from "react";
import s from "./Header.module.scss";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

export type PropsType = {
    isAuth: boolean
    login: string
}
export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <a className={s.logo} href="https://www.google.com/">
                <ConnectWithoutContactIcon
                    fontSize="inherit"
                    color="inherit"
                />
                <Typography className={s.logo_name} variant="h3" component='h1'>SocialNetwork</Typography>
            </a>
            <div className={s.loginBlock}>
                {props.login ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
}

