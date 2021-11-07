import { ActionType } from "../action_type_const/index";

interface Update_init {
    type: ActionType.UPDATE_INIT;
    payload: any;
}
interface Update_launchDetails {
    type: ActionType.LAUNCH_DETAILS;
    payload: any;
}
export type Action = Update_init | Update_launchDetails;
