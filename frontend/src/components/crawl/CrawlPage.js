import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadConfig, loadServerStatus } from "../../redux/actions/crawlActions";
import { loadJobs } from "../../redux/actions/jobActions";
import JobSection from "./JobSection";
import RunningJobs from "./RunningJobs";
import ManageJobCreation from "./ManageJobCreation";
import Title from "./Title";
// import { toast } from 'react-toastify';

export function CrawlPage({
    serverStatus,
    jobs,
    config,
    loadServerStatus,
    loadJobs,
    loadConfig,
    ...props
}) {
    useEffect(() => {
        if (!serverStatus) {
            loadServerStatus().catch((error) => {
                alert("Loading server failed" + error);
            });
        }
        if (jobs.length === 0) {
            loadJobs().catch((error) => {
                alert("Loading server failed" + error);
            });
        }
        if (config.length === 0) {
            loadConfig().catch((error) => {
                alert("Loading server failed" + error);
            });
        }
    }, [
        serverStatus,
        loadServerStatus,
        jobs.length,
        loadJobs,
        config.length,
        loadConfig,
    ]);

    return (
        <>
            <div className="row align-items-space-between">
                <div className="col">
                    {serverStatus && <Title data={serverStatus.startDate} />}
                </div>
            </div>
            <br />
            <div className="row align-items-start">
                <div className="col-4">
                    <button type="button" className="btn btn-primary btn-block">
                        Create a Job
                    </button>
                    <br />
                    {serverStatus && (
                        <RunningJobs data={serverStatus.runningJobs} />
                    )}
                    {serverStatus && <JobSection data={serverStatus.jobs} />}
                </div>
                <div className="col">
                    <ManageJobCreation jobs={jobs} config={config} />
                </div>
            </div>
        </>
    );
}

CrawlPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        serverStatus: state.serverStatus,
        jobs: state.jobs,
        config: state.config,
    };
}

const mapDispatchToProps = {
    loadServerStatus,
    loadJobs,
    loadConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlPage);
