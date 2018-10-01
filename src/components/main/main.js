import "./main.css";
import Portfolio from "../portfolio/portfolio";
import Papers from "../papers/papers";

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
                        Main
                    </span>
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
                    <Portfolio/>
                    <Papers/>
                </div>
            </div>
        </div>;
    }
}










