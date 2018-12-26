
import { createReducer } from "./app.reducer-utility";

export const Total_State_Sum_Reducer = createReducer(0, {

    CHANGE_TOTAL_STATE: Change_Total_State,

});

    function Change_Total_State(Total_State_Sum, action) {
        return Total_State_Sum + action.change;
    }
