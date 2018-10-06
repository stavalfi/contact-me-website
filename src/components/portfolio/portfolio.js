import "./portfolio.css";
import {creations} from "../../data/creations";
import gitHubIcon from '../../assets/icons/github-icon.png'
import React from "react";

const myGitHubRepositoriesAddress = 'https://github.com/stavalfi?tab=repositories';

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {creations};
    }

    render() {
        return <div className="portfolio-grid">
            {
                this.state.creations.map((creation, index) =>
                    <a href={creation.githubLink} key={index} className="creation" style={{
                        backgroundImage: "url(" + creation.imageAddress + ")"
                    }}>
                        <span>{creation.title}</span>
                    </a>)
            }
            <span className="more-portfolio">
                <span>Want to see more?</span>
                <a href={myGitHubRepositoriesAddress} className='more-portfolio-icon'>
                    <img src={gitHubIcon}/>
                </a>
            </span>
        </div>;
    }
}










