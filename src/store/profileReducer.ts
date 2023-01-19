import { v1 } from "uuid"


export type userDataType = {
    id: number
    name: string
    birth: string
    city: string
    education: string
    website: string
}
export type postType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPost: string
    postList: postType[]
    userData: userDataType[]
}
const initialState: ProfilePageType = {
    newPost: '',
    postList: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'I`m fine , thank you. What about you?', likesCount: 9},
        {id: v1(), message: 'I`m good to , is you go at work today?', likesCount: 4},
        {id: v1(), message: 'No , today i go to restaurant to my friend birthday ', likesCount: 13}
    ],
    userData: [{
        id: 1,
        name: 'Anatoly Movchan',
        birth: '1 august',
        city: 'Kiev',
        education: 'IT-KAMASUTRA',
        website: 'google.com'
    }]
}
export const  profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: state.newPost,
                likesCount: 0
            }
            return {...state,postList: [...state.postList,newPost],newPost: ''}
        }
        case 'UPDATE-POST': {
            return {...state,...action.payload}
        }
        default:
            return state
    }
}


export type ProfileActionTypes = AddPostActionType | UpdatePostActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostActionType = ReturnType<typeof updatePostTextAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updatePostTextAC = (newPost: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {newPost}
    } as const
}
