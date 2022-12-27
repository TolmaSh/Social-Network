import {ProfileActionTypes, profileReducer} from "./profileReducer";
import {DialogsActionTypes, dialogsReducer} from "./dialogsReducer";

export type userListType = {
    key: number
    name: string
    avatar: string
}
export type messageListType = {
    key: number
    item: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    newPost: string
    postList: postType[]
}
export type dialogsPage = {
    userList: userListType[]
    messageList: messageListType[]
    newMessageText: string
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPage
}

export type ActionTypes = ProfileActionTypes | DialogsActionTypes

export interface storeType {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void

}

export const store: storeType = {
    _state: {
        profilePage: {
            newPost: '',
            postList: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'I`m fine , thank you. What about you?', likesCount: 9},
                {id: 3, message: 'I`m good to , is you go at work today?', likesCount: 4},
                {id: 4, message: 'No , today i go to restaurant to my friend birthday ', likesCount: 13}
            ]
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('render')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber()
    },
}



