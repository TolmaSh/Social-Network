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
import {userDataType} from "../../App";
import {stateType} from "../../store/state";

type MainPropsType = {
    state: stateType
    usersData: userDataType
    addPost: () => void
    newPost: string
    changeNewPost: (newPostText: string) => void
}

export const Main: React.FC<MainPropsType> = ({changeNewPost, newPost, addPost, state, usersData}) => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <Routes>
                    <Route path="/" element={<Profile usersData={usersData} postList={state.profilePage.postList}
                                                      addPost={addPost} newPost={newPost} changeNewPost={changeNewPost}/>}/>
                    <Route path="/Messages/*"
                           element={<Messages userList={state.dialogsPage.userList}
                                              messageList={state.dialogsPage.messageList}/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}