import "./tag.css";
import React from "react";

export default class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tag">
            {this.props.tag}
        </div>;
    }
}










