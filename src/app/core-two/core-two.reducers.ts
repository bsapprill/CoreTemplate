
import { createReducer } from "../app.reducer-utility";

export const CoreTwo_Reducer = createReducer(0, {
    
    CHANGE_STATETWO: Change_StateTwo,
    
});

    function Change_StateTwo(CoreTwo_State, action) {
        return CoreTwo_State + action.change;
    }
