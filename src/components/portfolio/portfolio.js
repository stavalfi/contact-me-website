import "./portfolio.css";
import Creation from "../creation/creation";
import {creations} from "../../data/creations";

const React = require("react");

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {creations};
    }

    render() {
        return <div className="portfolio-grid">
            <div className="portfolio-column">
                <div className="left-column top-left-corner">
                    <Creation creation={this.state.creations.bittorrent}/>
                </div>
                <div className="background-height image2"/>
            </div>
            <div className="portfolio-column">
                <div className="background-height image1"/>
                <div className="right-column bottom-right-corner">
                    <Creation creation={this.state.creations.webpackStarter}/>
                </div>
            </div>
        </div>;
    }
}










