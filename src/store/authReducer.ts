
const SET_USER_DATA = 'SET_USER_DATA';

export type authReducerType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

};
export const authReducer = (
    state: authReducerType = initialState,
    action: authActionType
) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
};


type ToggleIsFetchingActionType = ReturnType<typeof setAuthUserData>;
export type authActionType = ToggleIsFetchingActionType

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return {type: SET_USER_DATA, payload: {userID,email,login}} as const
};
