import "./timeline.css";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const jobs = [
    {
        companyName: "NICE",
        websiteLink: "https://www.nice.com/",
        // companyLogoAddress: niceLogo,
        location: "israel",
        jobTitle: "Software Engineering Student",
        responsibilities: [
            "Writing websites using Javascript: Angular 6, Webpack, Typescript, ESLint",
            "Writing micro services using Spring technologies: Dependency Injection, MVC, Cloud, Cloud Stream."
        ]
    },
    {
        companyName: "IDF",
        websiteLink: "https://www.idf.il/en/",
        // companyLogoAddress: idfLogo,
        location: "israel",
        jobTitle: "Networking technician",
        responsibilities: [
            "CISCO Routers & Switches technician.",
            "Developing Website for my unit."
        ]
    }
];

export default class Timeline extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="timeline-container">
            <div className="container">
                {/*<div className="page-header">*/}
                {/*<h1 id="timeline">Timeline</h1>*/}
                {/*</div>*/}
                <ul className="timeline">
                    <li className="timeline-date left">
                        <div className="timeline-badge">
                            {/*<FontAwesomeIcon icon="stroopwafel"/>*/}
                            <i className="glyphicon glyphicon-check"></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h2>Now</h2>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-content">
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="timeline-title">
                                    NICE - Software Engineering Student
                                </h4>
                                <div className="text-muted">
                                    <i className="glyphicon glyphicon-time"></i>
                                    Israel
                                </div>
                                <br/>
                            </div>
                            <div className="timeline-body">
                                Writing websites using Javascript: Angular 6, Webpack, Typescript, ESLint
                            </div>
                        </div>
                    </li>
                    <li className="timeline-date timeline-inverted  right">
                        <div className="timeline-badge">
                            <i className="glyphicon glyphicon-check"></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h2>2018</h2>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted timeline-content">
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h3 className="timeline-title">Graduated from Ariel University</h3>
                                <div className="text-muted">
                                    <i className="glyphicon glyphicon-time"></i>
                                    Israel
                                </div>
                            </div>
                            <br/>
                            <div className="timeline-body">
                                <div>Bachelor's degree, Computer Science</div>
                                <div>GPA: 97/100</div>
                                <div>Three presidential scholarships for outstanding achievements</div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-date left">
                        <div className="timeline-badge">
                            <i className="glyphicon glyphicon-check"></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h2>2017</h2>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-content">
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="timeline-title">
                                    Started working at NICE - Software Engineering Student
                                </h4>
                                <div className="text-muted">
                                    <i className="glyphicon glyphicon-time"></i>
                                    Israel
                                </div>
                                <br/>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted timeline-date right">
                        <div className="timeline-badge">
                            <i className="glyphicon glyphicon-check"></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h2>2015</h2>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted timeline-content">
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h3 className="timeline-title">Started Degree in Ariel University</h3>
                                <div className="text-muted">
                                    <i className="glyphicon glyphicon-time"></i>
                                    Israel
                                </div>
                            </div>
                            <br/>
                            <div className="timeline-body">
                                <div>Bachelor's degree, Computer Science</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>;
    }
}




