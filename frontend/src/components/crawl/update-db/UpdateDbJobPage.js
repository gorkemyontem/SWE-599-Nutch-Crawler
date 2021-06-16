import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createJob } from "../../../redux/actions/jobActions";
import { loadConfig } from "../../../redux/actions/crawlActions";
import { loadJobs } from "../../../redux/actions/jobActions";

import PropTypes from "prop-types";
import JobForm from "./JobForm";
import { toast } from "react-toastify";
import { SideBar } from "../SideBar";

export function UpdateDbJobPage({
    jobs,
    loadJobs,
    config,
    loadConfig,
    createJob,
    history,
    ...props
}) {
    useEffect(() => {
        if (config.length === 0) {
            loadConfig().catch((error) => {
                alert("Loading server failed " + error);
            });
        }
        if (jobs.length === 0) {
            loadJobs().catch((error) => {
                alert("Loading jobs failed" + error);
            });
        }
    }, [config.length, loadConfig, jobs.length, loadJobs]);

    const [job, setJob] = useState({
        crawlId: "",
        type: "UPDATEDB",
        confId: "default",
        args: {},
    });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setJob((job) => ({
            ...job,
            [name]: value,
        }));
    }

    function formIsValid() {
        const { crawlId, type, confId } = job;
        const errors = {};
        if (!crawlId) errors.crawlId = "Crawl ID is required.";
        if (!type) errors.type = "Type is required";
        if (!confId) errors.confId = "ConfigId is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        createJob(job)
            .then(() => {
                toast.success("Job created.");
                history.push("/crawl/invert-links");
            })
            .catch((error) => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    }

    return (
        <div className="row">
            <SideBar />
            <div className="col-9">
                <JobForm
                    config={config}
                    jobs={jobs}
                    data={job}
                    errors={errors}
                    onChange={handleChange}
                    onSave={handleSave}
                    saving={saving}
                />
            </div>
        </div>
    );
}

UpdateDbJobPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        config: state.config,
        jobs: state.jobs,
    };
}

const mapDispatchToProps = {
    createJob,
    loadConfig,
    loadJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDbJobPage);
