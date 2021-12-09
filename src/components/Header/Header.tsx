
import React from "react";
import s from "./Header.module.scss";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const Header = () => {
    return (
        <header className={s.header}>
            <a className={s.logo} href="#">
                <ConnectWithoutContactIcon
                    fontSize="inherit"
                    color="inherit"
                />
                <span className={s.logo_name}>SocialNetwork</span>
            </a>

        </header>
    );
}

