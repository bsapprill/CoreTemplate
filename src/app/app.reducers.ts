
import { createReducer } from "./app.reducer-utility";

export const CoresActivated_Reducer = createReducer([], {
    TOGGLE_ACTIVATED: ToggleActivated
 });
 
     function ToggleActivated(CoresActivated_State, element: number) {
         return CoresActivated_State[element] = !CoresActivated_State[element];
     }