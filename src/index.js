import {render} from 'react-dom';
import Home from "./components/home";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <Home/>,
    document.getElementById('root')
);

module.hot.accept('./components/home.js', () => {
    render(<Home/>, document.getElementById('root'));
});