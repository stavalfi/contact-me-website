import "./contact-me.css";
import {additionalLinks} from "../../data/additionalLinks";
import personalImage from "../../assets/images/contact-me/personal-image.jpg"
import React from "react";

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {additionalLinks};

        this.moreInfoSentence = "If you're interested in working with me, please get in touch using" +
            " one of the methods below. Or feel free to just say hi. I like that too.";
        this.myEmail = "stavalfi@gmail.com";
    }

    render() {
        return <div className="contact-me-container">
            <img src={personalImage} className="personal-image"/>
            <div className="more-information">
                <div className="ending-sentence">
                    {this.moreInfoSentence}
                </div>
                <div className="my-email">
                    {this.myEmail}
                </div>
                <div className="additional-links">
                    {
                        this.state.additionalLinks.map((element, index) =>
                            <a key={index} href={element.iconLinkAddress}>
                                <img src={element.iconImageAddress} className="additional-links-icon"/>
                            </a>)
                    }
                </div>
            </div>
        </div>;
    }
}








