import "./paper.css";
import HorizontalTags from "../horizontal-tags/horizontal-tags";
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
            <div className="horizontal-tags">
                <HorizontalTags tagsAlign="flex-start" tags={this.props.paper.tags}/>
            </div>
        </div>;
    }
}










