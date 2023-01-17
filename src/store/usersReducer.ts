

export type UserType = {
    id: string
    followed: boolean
    photos: string
    name: string
    status: string
}
export type UsersPageType = {
    users: UserType[]
}
const initialState: UsersPageType = {
    users: []
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case 'UNFOLLOW-USER':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
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
