import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

class App extends React.Component {
    render() {
        return (
            <div>
                <p>C'est Ok !</p>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));