import "./experience.css";
import {jobs} from "../../data/jobs";
import React from "react";

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jobs};
    }

    render() {
        return <div className="experiences-container">
            {
                this.state.jobs.map((job, index) =>
                    <div key={index} className="experience">
                        <a href={job.websiteLink} className="company-name">
                            {job.companyName}
                        </a>
                        <div className="job-information">
                            <div className="job-title">
                                {job.jobTitle}
                            </div>
                            <ul className="responsibilities">
                                {
                                    job.responsibilities.map((responsibility, index) =>
                                        <li key={index} className="responsibility">
                                            {responsibility}
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>;
    }
}










