import "./papers.css";
import {mapIf, not, indexEven} from "../../utls/conditionalOperators";
import {papers} from "../../utls/papers";
import Paper from "../paper/paper";

const React = require("react");

export default class Papers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {papers};
    }

    render() {
        return <div className="papers-container">
            {
                this.state.papers.map((element, index) => <Paper key={index} paper={element}/>)
                    .map(mapIf(indexEven, (paper, index) =>
                        <div key={index} className="paper-container paper-container-right paper-right-border-circle">
                            {paper}
                        </div>))
                    .map(mapIf(not(indexEven), (paper, index) =>
                        <div key={index} className="paper-container paper-left-border-circle">
                            {paper}
                        </div>))
            }
        </div>;
    }
}










