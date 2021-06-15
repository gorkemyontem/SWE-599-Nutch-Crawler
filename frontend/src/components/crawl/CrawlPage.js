import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadConfig, loadServerStatus } from "../../redux/actions/crawlActions";
import { loadJobs } from "../../redux/actions/jobActions";
import { loadSeeds } from "../../redux/actions/seedActions";

import JobSection from "./sections/JobSection";
import RunningJobs from "./sections/RunningJobs";
import Title from "./sections/Title";
import Seeds from "./sections/Seeds";
import { toast } from "react-toastify";

export function CrawlPage({
    serverStatus,
    jobs,
    seeds,
    config,
    loadServerStatus,
    loadJobs,
    loadSeeds,
    loadConfig,
    deleteJob,
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
                alert("Loading jobs failed" + error);
            });
        }
        if (config.length === 0) {
            loadConfig().catch((error) => {
                alert("Loading config failed" + error);
            });
        }
        if (!seeds || Object.keys(seeds).length === 0) {
            loadSeeds().catch((error) => {
                alert("Loading seeds failed" + error);
            });
        }
    }, [
        serverStatus,
        loadServerStatus,
        jobs.length,
        loadJobs,
        config.length,
        loadConfig,
        seeds,
        loadSeeds,
    ]);
    return (
        <>
            {serverStatus && (
                <div className="row align-items-space-between">
                    <div className="col">
                        <Title data={serverStatus.startDate} />
                    </div>
                </div>
            )}
            <br />
            {serverStatus && (
                <div className="row align-items-start">
                    <div className="col-12">
                        <RunningJobs data={serverStatus.runningJobs} />
                    </div>
                </div>
            )}
            {serverStatus && (
                <div className="row align-items-start">
                    <div className="col-12">
                        <JobSection data={serverStatus.jobs} />
                    </div>
                </div>
            )}
            {serverStatus && (
                <div className="row align-items-start">
                    <div className="col-12">
                        <Seeds seeds={seeds} />
                    </div>
                </div>
            )}
        </>
    );
}

CrawlPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {
        serverStatus: state.serverStatus,
        jobs: state.jobs,
        seeds: state.seeds,
        config: state.config,
    };
}

const mapDispatchToProps = {
    loadServerStatus,
    loadJobs,
    loadConfig,
    loadSeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(CrawlPage);
