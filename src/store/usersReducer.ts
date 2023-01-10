import {v1} from 'uuid';

export type UserType = {
    id: string
    follow: boolean
    photoUrl: string
    fullName: string
    status: string
    location: { country: string, city: string }
}
export type UsersPageType = {
    users: UserType[]
}
const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            follow: true,
            photoUrl: '',
            fullName: 'Anatoly',
            status: 'I am looking a Job right now..',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: v1(),
            follow: false,
            photoUrl: '',
            fullName: 'Vadym',
            status: 'I am drink beer now',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: v1(),
            follow: true,
            photoUrl: '',
            fullName: 'Anastasiia',
            status: 'I am sleep now',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
    ]
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, follow: true} : u)}
        case 'UNFOLLOW-USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, follow: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}


type FollowUserActionType = ReturnType<typeof followUserAC>
type UnFollowUserActionType = ReturnType<typeof unFollowUserAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
export type UsersActionType =
    | FollowUserActionType
    | UnFollowUserActionType
    | SetUsersActionType


export const followUserAC = (userID: string) => {
    return {
        type: 'FOLLOW-USER',
        payload: {userID}
    } as const
}
export const unFollowUserAC = (userID: string) => {
    return {
        type: 'UNFOLLOW-USER',
        payload: {userID}
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {users}
    } as const
}
