
import { createReducer } from "../app.reducer-utility";

export const CoreOne_Reducer = createReducer(0, {
    
    CHANGE_STATEONE: Change_StateOne,
    
});

    function Change_StateOne(CoreOne_State, action) {
        return CoreOne_State + action.change;
    }
