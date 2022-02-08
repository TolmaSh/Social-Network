
import React from "react";
import s from "./Header.module.scss";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Typography} from "@mui/material";

export const Header = () => {
    return (
        <header className={s.header}>
            <a className={s.logo} href="#">
                <ConnectWithoutContactIcon
                    fontSize="inherit"
                    color="inherit"
                />
                <Typography className={s.logo_name} variant="h3" component='h1'>SocialNetwork</Typography>
            </a>

        </header>
    );
}

