import {profilePageType} from "./store";

const initialState = {
    newPost: '',
    postList: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'I`m fine , thank you. What about you?', likesCount: 9},
        {id: 3, message: 'I`m good to , is you go at work today?', likesCount: 4},
        {id: 4, message: 'No , today i go to restaurant to my friend birthday ', likesCount: 13}
    ]
}
export const profileReducer = (state: profilePageType = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: new Date().getTime(),
                message: state.newPost,
                likesCount: 0
            }
            state.postList.push(newPost)
            state.newPost = "";
            return state
        }
        case "UPDATE-POST": {
            state.newPost = action.payload.newPostText
            return state
        }
        default:
            return state
    }
}


export type ProfileActionTypes = AddPostActionType | UpdatePostActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostActionType = ReturnType<typeof updatePostTextAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updatePostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {newPostText}
    } as const
}
