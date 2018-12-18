
import { combineReducers } from "redux";
import { createReducer } from "./app.reducer-utility";

export interface IAppState {
    appRoutes: string[]
}

export const INITIAL_STATE: IAppState = {
    appRoutes: ['CoreOne', 'CoreTwo', 'CoreThree']
}

const appRoutes_Reducer = createReducer([], {
    VOID_TEST: voidTest
});

function voidTest() {
    return INITIAL_STATE.appRoutes;
}

export const rootReducer = combineReducers({
    appRoutes: appRoutes_Reducer
})

