import {dialogsPage} from "./state";


export const dialogsReducer = (state: dialogsPage, action: DialogsActionTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {
                key: new Date().getTime(),
                item: state.newMessageText,
            }
            state.messageList.push(newMessage)
            state.newMessageText = "";
            return state
        }
        case "UPDATE-MESSAGE-TEXT": {
            state.newMessageText = action.payload.newMessageText
            return state
        }
        default: return state
    }
}


type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateMessageTextActionType = ReturnType<typeof updateMessageText>
export type DialogsActionTypes =
    | AddMessageActionType
    | UpdateMessageTextActionType


export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateMessageText = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        payload: {newMessageText}
    } as const
}
