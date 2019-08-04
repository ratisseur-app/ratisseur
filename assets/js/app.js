import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));