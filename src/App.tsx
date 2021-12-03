import React from 'react';
import './App.css';
import logo from "./assets/logo.png";
import banner from "./assets/social-banner.jpg"

function App() {
    return (
    <div className="wrapper">
    <header className='header'>
        <img className="logo" src={logo} alt="logo"/>
        <span>Header</span>
    </header>
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
    <footer className="footer">
        Footer
    </footer>
    </div>
    );
}

export default App;
