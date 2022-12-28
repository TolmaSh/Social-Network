import {dialogsPage} from "./store";

const initialState = {
    newMessageText: '',
    userList: [
        {key: 0, name: 'Anatoly', avatar: ''},
        {key: 1, name: 'Sveta', avatar: ''},
        {key: 2, name: 'Sergey', avatar: ''},
        {key: 3, name: 'Kolya', avatar: ''}
    ],
    messageList: [
        {key: 0, item: "Hi , how are you?"},
        {key: 2, item: "Hey, i`m fine thank`s. What about your?"},
        {key: 3, item: "I`m fine too. What day is today?"},
        {key: 4, item: "Today is monday."},
        {key: 5, item: "Ohhh , it`s so bad."},
        {key: 6, item: "Yessss)"}

    ]
}
export const dialogsReducer = (state: dialogsPage = initialState, action: DialogsActionTypes) => {
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
        default:
            return state
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
