import banner from "../assets/social-banner.jpg";
import React from "react";

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
                    avatar + description
                </div>
                <div>
                    MyPosts
                </div>
                <div>
                    New Post
                </div>
                <div>
                    FirstPost
                </div>
                <div>
                    SecondPost
                </div>
            </div>
        </main>
    );
}

export default Main;