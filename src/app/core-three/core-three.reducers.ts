
import { createReducer } from "../app.reducer-utility";

export const CoreThree_Reducer = createReducer(0, {
    
    CHANGE_STATETHREE: Change_StateThree,
    
});

    function Change_StateThree(CoreThree_State, action) {
        return CoreThree_State + action.change;
    }
    