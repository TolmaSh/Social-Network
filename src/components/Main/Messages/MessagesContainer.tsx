import React from "react";
import { StateType} from '../../../store/store';

import {addMessageAC, updateMessageText} from "../../../store/dialogsReducer";
import { Messages } from "./Messages";


type MessagesPropsType = {
    store: any
}


export const MessagesContainer: React.FC<MessagesPropsType> = ({store}) => {

    const state:StateType = store.getState()
    const addMessage = () => {
        store.dispatch(addMessageAC())
    }
    const updateMessage = (text: string) => {
        store.dispatch(updateMessageText(text))
    }
    return ( <Messages userList={state.dialogsPage.userList}
                       messageList={state.dialogsPage.messageList}
                       newMessageText={state.dialogsPage.newMessageText}
                       addMessage={addMessage}
                       updateMessage={updateMessage}/>
    )

}