import { combineReducers ,configureStore } from "@reduxjs/toolkit"
import navSlice from "./sllices/navSlice"
import notifySlice from "./sllices/notifySlice"
import playerSlice from "./sllices/playerSlice"

const rootReducer = combineReducers({
    nav: navSlice,
    player: playerSlice,
    notify: notifySlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch