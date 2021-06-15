import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const JobForm = ({
    data,
    onSave,
    onChange,
    saving = false,
    errors = {},
    ...props
}) => {
    return (
        <form onSubmit={onSave}>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}

            <TextInput
                name="crawlId"
                label="Crawl Id"
                value={data.crawlId}
                onChange={onChange}
                error={errors.crawlId}
            />

            <SelectInput
                name="type"
                label="Type"
                value={data.type}
                defaultOption="Select Type"
                options={["INJECT", "GENERATE", "FETCH", "PARSE"].map((el) => ({
                    value: el,
                    text: el,
                }))}
                onChange={onChange}
                error={errors.type}
            />

            <SelectInput
                name="confId"
                label="Config"
                value={data.confId}
                defaultOption="Select Config"
                options={props.config.map((config) => ({
                    value: config,
                    text: config,
                }))}
                onChange={onChange}
                error={errors.confId}
            />

            <SelectInput
                name="seedName"
                label="Seed Name"
                value={data.seedName}
                defaultOption="Select Seed"
                options={Object.keys(props.seeds).map((seed) => ({
                    value: seed,
                    text: seed,
                }))}
                onChange={onChange}
                error={errors.seedName}
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
