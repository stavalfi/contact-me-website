import "./paper.css";
import React from "react";

export default class Paper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="paper">
            <a href={this.props.paper.githubLink}>
                <div className="paper-title">
                    {this.props.paper.title}
                </div>
                <p className="paper-summary">
                    {this.props.paper.summary}
                </p>
            </a>
        </div>;
    }
}










