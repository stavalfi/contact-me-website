import "./tag.css";

const React = require("react");

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










