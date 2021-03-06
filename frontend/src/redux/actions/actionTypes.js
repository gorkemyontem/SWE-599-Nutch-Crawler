export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the  of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

// CRAWL
export const LOAD_SERVER_STATUS_SUCCESS = "LOAD_SERVER_STATUS_SUCCESS";

// JOB
export const LOAD_JOBS_SUCCESS = "LOAD_JOBS_SUCCESS";
export const CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS";
export const STOP_JOB_SUCCESS = "STOP_JOB_SUCCESS";

// CONFIG
export const LOAD_CONFIG_SUCCESS = "LOAD_CONFIG_SUCCESS";

// SEED
export const LOAD_SEED_SUCCESS = "LOAD_SEED_SUCCESS";
export const CREATE_SEED_SUCCESS = "CREATE_SEED_SUCCESS";
