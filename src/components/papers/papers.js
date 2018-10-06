import "./papers.css";
import {mapIf, not, indexEven} from "../../utls/conditionalOperators";
import {papers} from "../../data/papers";
import Paper from "../paper/paper";

import gitHubIcon from '../../assets/icons/github-icon.png'
import React from "react";

const myGitHubRepositoriesAddress = 'https://github.com/stavalfi/lectures';

export default class Papers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {papers};
    }

    render() {
        return <div className="papers-container">
            {
                this.state.papers.map((paper, index) =>
                    <div key={index}>
                        <Paper paper={paper}/>
                        {
                            index < this.state.papers.length - 1 ?
                                <div className="lined-title"/>
                                : <div/>
                        }
                    </div>)
            }
            <span className="more-papers">
                <span>Want to see more?</span>
                <a href={myGitHubRepositoriesAddress} className='more-papers-icon'>
                    <img src={gitHubIcon}/>
                </a>
            </span>
        </div>;
    }
}










