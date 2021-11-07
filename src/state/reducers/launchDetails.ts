import { ActionType } from "../action_type_const/index";
import { Action } from "../action_types";

interface launchData {
    Name: string;
    Site: string;
    Details: string;
}
const initialData = {
    Name: "",
    Site: "",
    Details: "",
};
const launchDetails = (state: launchData = initialData, action: Action) => {
    switch (action.type) {
        case ActionType.LAUNCH_DETAILS:
            return (state = action.payload);
        default:
            return state;
    }
};

export default launchDetails;
