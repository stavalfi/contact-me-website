import "./welcome.css";
import Main from "../main/main";

const React = require("react");

export default class Welcome extends React.Component {

    render() {
        return <div>
            <div className="my-image center-text">
                <div className="group">
                    <div className='sentence'>
                        Hey, my name is
                    </div>
                    <div className='my-name'>
                        --- Stav Alfi ---
                    </div>
                </div>
            </div>
            <Main/>
        </div>;
    }
}










