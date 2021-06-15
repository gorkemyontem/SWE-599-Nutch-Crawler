import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import serverStatus from "./serverStatusReducer";
import apiCallsInProgress from "./apiStatusReducer";
import jobs from "./jobReducer";
import config from "./configReducer";

const rootReducer = combineReducers({
    courses,
    authors,
    apiCallsInProgress,
    serverStatus,
    jobs,
    config,
});

export default rootReducer;
