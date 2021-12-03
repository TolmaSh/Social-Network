import banner from "../assets/social-banner.jpg";
import React from "react";
import Accordion from "./Accordion";

function Main() {
    return (
        <main className="main">
            <div className="sidebar">
                <ul>
                    <li>Home</li>
                    <li>Message</li>
                    <li>Gallery</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className="content">
                <img src={banner} alt="banner"/>
                <div>
                    <Accordion titleValue={"Hello, Anatoliy"} accordionNum={1} collapsed={true}/>
                    <Accordion titleValue={"Hello, Sergey"} accordionNum={2} collapsed={false}/>
                </div>
            </div>
        </main>
    );
}

export default Main;