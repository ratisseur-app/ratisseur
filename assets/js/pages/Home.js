import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'


class Home extends Component{
    render(){
        return (
            <div>
                Hello from Home page
                <div className="text-center">
                    <Link className="btn btn-primary" to="/register">Inscription</Link>
                </div>
            </div>
        )
    }
}

export default Home;
