import { combineReducers } from "redux";
import spaceXdata from "./spaceXdata";
import launchDetails from "./launchDetails";

const RootReducer = combineReducers({
    spaceXdata,
    launchDetails,
});

export default RootReducer;

// export type RootState = ReturnType<typeof RootReducer>
