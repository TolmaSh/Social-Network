import logo from "../assets/logo.png";
import React from "react";

function Header() {
    return (
        <header className='header'>
            <img className="logo" src={logo} alt="logo"/>
            <span>Header</span>
        </header>
    );
}

export default Header;