import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createJob } from "../../../redux/actions/jobActions";
import { loadConfig } from "../../../redux/actions/crawlActions";
import { loadSeeds } from "../../../redux/actions/seedActions";

import PropTypes from "prop-types";
import JobForm from "./JobForm";
import { toast } from "react-toastify";
import { SideBar } from "../SideBar";

export function InjectJobPage({
    config,
    loadConfig,
    createJob,
    seeds,
    loadSeeds,
    history,
    ...props
}) {
    useEffect(() => {
        if (config.length === 0) {
            loadConfig().catch((error) => {
                alert("Loading server failed " + error);
            });
        }
    }, [config.length, loadConfig]);

    useEffect(() => {
        loadSeeds().catch((error) => {
            alert("Loading seeds failed" + error);
        });
    }, []);

    const [job, setJob] = useState({
        crawlId: "",
        type: "INJECT",
        confId: "default",
        seedName: "",
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
        const { crawlId, type, confId, seedName } = job;
        const errors = {};
        if (!crawlId) errors.crawlId = "Crawl ID is required.";
        if (!type) errors.type = "Type is required";
        if (!confId) errors.confId = "ConfigId is required";
        if (!seedName) errors.seedName = "Seed Name is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        const dataToSend = { ...job, args: { seedName: job.seedName } };
        delete dataToSend.seedName;
        createJob(dataToSend)
            .then(() => {
                toast.success("Job created.");
                history.push("/crawl/generate");
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
                    seeds={seeds}
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

InjectJobPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        config: state.config,
        seeds: state.seeds,
    };
}

const mapDispatchToProps = {
    createJob,
    loadConfig,
    loadSeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(InjectJobPage);
