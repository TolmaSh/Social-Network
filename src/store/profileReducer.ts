import {profilePageType} from "./store";


export const profileReducer = (state: profilePageType, action: ProfileActionTypes) => {
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
        default: return state
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
