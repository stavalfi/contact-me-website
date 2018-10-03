import "./welcome.css";
// import Main from "../main/main";
import React from "react";
import contentImage from './images/content.svg'
import featureImage from './images/feature.svg'
import headerImage from './images/header.svg'
import signUpImage from './images/sign-up.svg'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className='page'>
                <div className='section menu'></div>
                <div className='section header'>
                    <img src={headerImage}/>
                </div>
                <div className='section content'>
                    <img src={contentImage}/>
                </div>
                <div className='section sign-up'>
                    <img src={signUpImage}/>
                </div>
                <div className='section feature-1'>
                    <img src={featureImage}/>
                </div>
                <div className='section feature-2'>
                    <img src={featureImage}/>
                </div>
                <div className='section feature-3'>
                    <img src={featureImage}/>
                </div>
            </div>
            {/*<div className="my-image center-text">*/}
            {/*<div className="group">*/}
            {/*<div className='sentence'>*/}
            {/*Hey, my name is*/}
            {/*</div>*/}
            {/*<div className='my-name'>*/}
            {/*Stav Alfi*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<Main/>*/}
        </div>;
    }
}










