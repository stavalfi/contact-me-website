import "./main.css";
import Portfolio from "../portfolio/portfolio";
import Papers from "../papers/papers";
import ContactMe from "../contact-me/contact-me";
import Experience from "../experience/experience";
import React from "react";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "portfolio"
        };
    }

    getPage(pageName) {
        switch (pageName) {
            case "portfolio":
                return <Portfolio/>;
            case "papers":
                return <Papers/>;
            case "experience":
                return <Experience/>;
            case "contactMe":
                return <ContactMe/>;
        }
    }

    render() {
        return <div className="page-container">
            <div className="website-title">
                STAV ALFI
            </div>
            <div className="menu">
                    <span onClick={() => this.setState({page: "portfolio"})}>
                        Portfolio
                    </span>
                <span onClick={() => this.setState({page: "papers"})}>
                        Papers
                    </span>
                <span onClick={() => this.setState({page: "experience"})}>
                        Experience
                    </span>
                <span onClick={() => this.setState({page: "contactMe"})}>
                        Contact me
                    </span>
            </div>
            <div className="content">
                {this.getPage(this.state.page)}
            </div>
            <div className="website-header">
                all rights reserved | Stav Alfi 2018 © | stavalfi@gmail.com
            </div>
        </div>;
    }
}










