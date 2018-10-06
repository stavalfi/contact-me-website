import "./main.css";
import Portfolio from "../portfolio/portfolio";
import Papers from "../papers/papers";
import ContactMe from "../contact-me/contact-me";
import React from "react";
import Timeline from "../timeline/timeline";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="page-container">
            <Timeline/>
            <div className="lined-title page-separator">
                <span>Portfolio</span>
            </div>
            <Portfolio/>
            <div className="lined-title page-separator">
                <span>Some of my writings</span>
            </div>
            <Papers/>
            <div className="lined-title page-separator">
                <span>Contact Me</span>
            </div>
            <ContactMe/>
            <div className="website-header">
                all rights reserved | Stav Alfi 2018 © | stavalfi@gmail.com
            </div>
        </div>;
    }
}










