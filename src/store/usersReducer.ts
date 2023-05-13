export type UserType = {
    id: string;
    followed: boolean;
    photos: { small: string | null, large: string | null };
    name: string;
    status: string;
};
export type UsersPageType = {
    users: UserType[]
    page: number
    count: number
    totalCount: number
    isFetching: boolean
    followingStatus: number[]

};
const initialState: UsersPageType = {
    users: [],
    page: 1,
    count: 10,
    totalCount: 40,
    isFetching: false,
    followingStatus: []

};
export const usersReducer = (
    state: UsersPageType = initialState,
    action: UsersActionType
) => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.payload.userID ? {...u, followed: true} : u
                ),
            };
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.payload.userID ? {...u, followed: false} : u
                ),
            };
        case "TOGGLE-FOLLOWING-STATUS":
            return {
                ...state,
                followingStatus: action.payload.followingStatus ?
                    [...state.followingStatus, action.payload.uId]
                    :
                    state.followingStatus.filter(id => id !== action.payload.uId)
            };
        case 'SET-USERS':
        case 'SET-TOTAL-COUNT':
        case 'SET-PAGE':
        case 'TOGGLE-IS-FETCHING':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

type FollowUserActionType = ReturnType<typeof followUser>;
type UnFollowUserActionType = ReturnType<typeof unFollowUser>;
type SetUsersActionType = ReturnType<typeof setUsers>;
type SetTotalCountActionType = ReturnType<typeof setTotalCount>;
type SetPageActionType = ReturnType<typeof setPage>;
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
type FollowingStatusActionType = ReturnType<typeof toggleIsFollowingStatus>;
export type UsersActionType =
    | FollowUserActionType
    | UnFollowUserActionType
    | SetUsersActionType
    | SetTotalCountActionType
    | SetPageActionType
    | ToggleIsFetchingActionType
    | FollowingStatusActionType

export const followUser = (userID: string) => {
    return {
        type: 'FOLLOW-USER',
        payload: {userID},
    } as const;
};
export const unFollowUser = (userID: string) => {
    return {
        type: 'UNFOLLOW-USER',
        payload: {userID},
    } as const;
};

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {users},
    } as const;
};
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {totalCount},
    } as const;
};
export const setPage = (page: number) => {
    return {
        type: 'SET-PAGE',
        payload: {page},
    } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', payload: {isFetching}} as const
};
export const toggleIsFollowingStatus = (followingStatus: boolean,uId: number) => {
    return {type: 'TOGGLE-FOLLOWING-STATUS', payload: {followingStatus,uId}} as const
};
