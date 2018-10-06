import {render} from 'react-dom';
import Home from "./components/home";
import React from "react";
import ReactDOM from "react-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

ReactDOM.render(
    <Home/>,
    document.getElementById('root')
);

module.hot.accept('./components/home.js', () => {
    render(<Home/>, document.getElementById('root'));
});