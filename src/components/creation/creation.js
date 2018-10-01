import "./creation.css";
import HorizontalTags from "../horizontal-tags/horizontal-tags";
import {Textfit} from 'react-textfit';

const React = require("react");

export default class Creation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="creation-details">
            <div className="creation-title">
                {
                    this.props.creation.title.map((partOfTitle, index) =>
                        <Textfit key={index} mode="single">
                            {partOfTitle}
                        </Textfit>)
                }
            </div>
            <p>
                {this.props.creation.summary}
            </p>
            <HorizontalTags tagsAlign="center" tags={this.props.creation.tags}/>
            <div className="creation-github-link">
                <a href={this.props.creation.githubLink}>
                    <img src="http://icons-for-free.com/free-icons/png/512/1220319.png"/>
                </a>
            </div>
        </div>;
    }
}










