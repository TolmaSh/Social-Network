import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
})

export type rootReducerType=ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
//@ts-ignore
window.store=store

export default store