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
import {ActionTypes, stateType, userDataType} from '../../store/store';

type MainPropsType = {
    state: stateType
    usersData: userDataType
    newPost: string
    dispatch: (action: ActionTypes) => void
}

export const Main: React.FC<MainPropsType> = ({dispatch, newPost, state, usersData}) => {
    return (
        <main className={s.main}>
            <div className={s.content}>
                <Routes>
                    <Route path="/" element={<Profile usersData={usersData} postList={state.profilePage.postList}
                                                      dispatch={dispatch} newPost={newPost}/>}/>
                    <Route path="/Messages/*"
                           element={<Messages userList={state.dialogsPage.userList}
                                              messageList={state.dialogsPage.messageList}
                                              newMessageText={state.dialogsPage.newMessageText}
                                              dispatch={dispatch}
                           />}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    );
}