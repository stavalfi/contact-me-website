import "./welcome.css";
import Main from "../main/main";
import React from "react";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="my-image center-text">
                <div className="group">
                    <div className='sentence'>
                        Hey, my name is
                    </div>
                    <div className='my-name'>
                        Stav Alfi
                    </div>
                </div>
            </div>
            <Main/>
        </div>;
    }
}










