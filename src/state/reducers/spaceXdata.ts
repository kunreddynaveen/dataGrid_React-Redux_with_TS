import { ActionType } from "../action_type_const/index";
import { Action } from "../action_types";

interface gridState {
    //creating an interface to declare the type as an "Array of Objects"
    data: {
        Name: string;
        Date: string | number;
        Time: string | number;
        Details: string;
        RocketName: string;
    }[];
}

const spaceXdata = (state: gridState["data"] = [], action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_INIT:
            return (state = action.payload);
        default:
            return state;
    }
};

export default spaceXdata;
