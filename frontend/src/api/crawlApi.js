import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4545",
});

export function getServerStatus() {
    return axiosInstance.get("/admin").then(handleResponse).catch(handleError);
}

// JOB
export function postCreateJob(job) {
    return axiosInstance
        .post("/job/create", job)
        .then(handleResponse)
        .catch(handleError);
}

export function deleteJob(jobId) {
    return axiosInstance
        .post(`/job/${jobId}/stop`)
        .then(handleResponse)
        .catch(handleError);
}

export function getJobs() {
    return axiosInstance.get("/job").then(handleResponse).catch(handleError);
}

// CONFIG
export function getConfig() {
    return axiosInstance.get("/config").then(handleResponse).catch(handleError);
}

// SEED
export function postCreateSeed(seed) {
    return axiosInstance
        .post("/seed/create", seed)
        .then(handleResponse)
        .catch(handleError);
}

export function getSeeds() {
    return axiosInstance.get("/seed").then(handleResponse).catch(handleError);
}
