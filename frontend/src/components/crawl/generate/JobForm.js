import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/SelectInput";

const JobForm = ({
    data,
    onSave,
    onChange,
    saving = false,
    errors = {},
    ...props
}) => {
    const uniqueCrawlId = [...new Set(props.jobs.map((job) => job.crawlId))];
    return (
        <form onSubmit={onSave}>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}

            <SelectInput
                name="type"
                label="Type"
                value={data.type}
                disabled={true}
                options={["GENERATE"].map((el) => ({
                    value: el,
                    text: el,
                }))}
                onChange={onChange}
                error={errors.type}
            />

            <SelectInput
                name="crawlId"
                label="Crawl Id"
                value={data.crawlId}
                defaultOption="Select Crawl Id"
                options={uniqueCrawlId.map((id) => ({
                    value: id,
                    text: id,
                }))}
                onChange={onChange}
                error={errors.crawlId}
            />

            <SelectInput
                name="confId"
                label="Config"
                value={data.confId}
                options={props.config.map((config) => ({
                    value: config,
                    text: config,
                }))}
                onChange={onChange}
                error={errors.confId}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Creating..." : "Create"}
            </button>
        </form>
    );
};

JobForm.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
};

export default JobForm;
