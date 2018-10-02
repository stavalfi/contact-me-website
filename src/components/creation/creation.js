import "./creation.css";
import HorizontalTags from "../horizontal-tags/horizontal-tags";
import {Textfit} from 'react-textfit';
import gitHubIcon from '../../assets/icons/github-icon.png'
import React from "react";

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
            <a href={this.props.creation.githubLink}
               className="creation-github-link">
                <img src={gitHubIcon}/>
            </a>
        </div>;
    }
}










