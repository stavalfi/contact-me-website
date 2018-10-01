import "./horizontal-tags.css";
import Tag from "../tag/tag";

const React = require("react");

export default class HorizontalTags extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tags" style={{
            justifyContent: this.props.tagsAlign
        }}>
            {
                this.props.tags.map(tag =>
                    <Tag key={tag} tag={tag}/>)
            }
        </div>;
    }
}










