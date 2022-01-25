import React from "react";
import s from "./Main.module.scss"
import {Profile} from "./Profile/Profile";
import {
    Routes,
    Route
} from "react-router-dom";
import {Messages} from "./Messages/Messages";
import {Gallery} from "./Gallery/Gallery";
import {Settings} from "./Settings/Settings";
import {messageListType, userDataType, userListType} from "../../App";

type MainPropsType = {
    userList: userListType[]
    messageList: messageListType[]
    usersData: userDataType
}

export const Main: React.FC<MainPropsType> = ({userList, messageList, usersData}) => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <Routes>
                    <Route path="/" element={<Profile usersData={usersData}/>}/>
                    <Route path="/Messages/*"
                           element={<Messages userList={userList} messageList={messageList} />}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}