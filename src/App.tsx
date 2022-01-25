import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Navigation} from "./components/Navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

export type userListType = {
    key: number
    name: string
    avatar: string
}
const userList: Array<userListType> = [
    {key: 0, name: 'Anatoly', avatar: ''},
    {key: 1, name: 'Sveta', avatar: ''},
    {key: 2, name: 'Sergey', avatar: ''},
    {key: 3, name: 'Kolya', avatar: ''}

]
export type messageListType = {
    key: number
    item: string
}
const messageList: Array<messageListType> = [
    {key: 0, item: "Hi , how are you?"},
    {key: 2, item: "Hey, i`m fine thank`s. What about your?"},
    {key: 3, item: "I`m fine too. What day is today?"},
    {key: 4, item: "Today is monday."},
    {key: 5, item: "Ohhh , it`s so bad."},
    {key: 6, item: "Yessss)"}
]
export type userDataType = {
    id: number
    name: string
    birth: string
    city: string
    education: string
    website: string
}
const usersData = {
    id: 1,
    name: "Anatoly Movchan",
    birth: "1 august",
    city: "Kiev",
    education: "IT-KAMASUTRA",
    website: "google.com"
}
function App() {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <Main userList={userList} messageList={messageList} usersData={usersData}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
