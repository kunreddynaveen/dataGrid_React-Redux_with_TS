import { Dispatch } from "redux";
import { ActionType } from "../action_type_const";
import { Action } from "../action_types/index";

interface gridState {
    data: {
        Name: string;
        Date: string | number;
        Details: string;
    }[];
}
interface launchData {
    Name: string;
    Site: string;
    Details: string;
}

export const InitialUpdate = (data: gridState["data"]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_INIT,
            payload: data,
        });
    };
};

export const LaunchDetails = (data: launchData) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LAUNCH_DETAILS,
            payload: data,
        });
    };
};
