import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from './usersReducer';

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer
})

export type rootReducerType=ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
//@ts-ignore
window.store=store

export default store