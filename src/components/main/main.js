import "./main.css";
import Portfolio from "../portfolio/portfolio";
import Papers from "../papers/papers";
import ContactMe from "../contact-me/contact-me";

const React = require("react");

export default class Main extends React.Component {

    render() {
        return <div className="page-container">
            <div className="page-content">
                <div className="website-title">
                    STAV ALFI
                </div>
                <div className="menu">
                    <span>
                        Portfolio
                    </span>
                    <span>
                        Papers
                    </span>
                    <span>
                        Experience
                    </span>
                    <span>
                        Contact me
                    </span>
                </div>
                <div className="content">
                    <ContactMe/>
                    <Portfolio/>
                </div>
                <div className="website-header">
                    all rights reserved | Stav Alfi 2018 © | stavalfi@gmail.com
                </div>
            </div>
        </div>;
    }
}










