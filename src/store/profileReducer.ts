import {v1} from 'uuid'


export type userDataType = {
    userId: number
    fullName: string
    aboutMe: string
    contacts: { facebook:string }
    photos: {small: string,large: string}
}
export type postType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPost: string
    postList: postType[]
    userData: userDataType | null

}
const initialState: ProfilePageType = {
    newPost: '',
    postList: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'I`m fine , thank you. What about you?', likesCount: 9},
        {id: v1(), message: 'I`m good to , is you go at work today?', likesCount: 4},
        {id: v1(), message: 'No , today i go to restaurant to my friend birthday ', likesCount: 13}
    ],
    userData: null,
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes):ProfilePageType  => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: state.newPost,
                likesCount: 0
            }
            return {...state, postList: [...state.postList, newPost], newPost: ''}
        }
        case 'UPDATE-POST':
        case 'SET-PROFILE-DATA': {
            return {...state, ...action.payload}
        }


        default:
            return state
    }
}


export type ProfileActionTypes = AddPostActionType | UpdatePostActionType | SetProfileDataActionType

type AddPostActionType = ReturnType<typeof addPost>
type UpdatePostActionType = ReturnType<typeof updatePostText>
type SetProfileDataActionType = ReturnType<typeof setProfileData>
export const addPost = () => ({type: 'ADD-POST'} as const)
export const updatePostText = (newPost: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {newPost}
    } as const
}
export const setProfileData = (userData: userDataType) => {
    return {type: 'SET-PROFILE-DATA', payload: {userData}} as const
}
