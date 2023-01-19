export type UserType = {
  id: string;
  followed: boolean;
  photos: { small: string | null , large: string | null };
  name: string;
  status: string;
};
export type UsersPageType = {
  users: UserType[];
  page: number;
  count: number;
  totalCount: number;
};
const initialState: UsersPageType = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 40,
};
export const usersReducer = (
  state: UsersPageType = initialState,
  action: UsersActionType
) => {
  switch (action.type) {
    case "FOLLOW-USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followed: true } : u
        ),
      };
    case "UNFOLLOW-USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followed: false } : u
        ),
      };
    case "SET-USERS":
    case "SET-TOTAL-COUNT":
    case "SET-PAGE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

type FollowUserActionType = ReturnType<typeof followUserAC>;
type UnFollowUserActionType = ReturnType<typeof unFollowUserAC>;
type SetUsersActionType = ReturnType<typeof setUsersAC>;
type SetTotalCountActionType = ReturnType<typeof setTotalCountAC>;
type SetPageActionType = ReturnType<typeof setPageAC>;
export type UsersActionType =
  | FollowUserActionType
  | UnFollowUserActionType
  | SetUsersActionType
  | SetTotalCountActionType
  | SetPageActionType

export const followUserAC = (userID: string) => {
  return {
    type: "FOLLOW-USER",
    payload: { userID },
  } as const;
};
export const unFollowUserAC = (userID: string) => {
  return {
    type: "UNFOLLOW-USER",
    payload: { userID },
  } as const;
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    payload: { users },
  } as const;
};
export const setTotalCountAC = (totalCount: number) => {
  return {
    type: "SET-TOTAL-COUNT",
    payload: { totalCount },
  } as const;
};
export const setPageAC = (page: number) => {
  return {
    type: "SET-PAGE",
    payload: { page },
  } as const;
};
