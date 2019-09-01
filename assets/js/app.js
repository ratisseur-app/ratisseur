import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import Main from "./layout/Main";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "../css/1.d2215c8b.chunk.css";
import "../css/main.797c15d4.chunk.css";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Router>
                        <Main/>
                        <React.Suspense fallback={loading()}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </React.Suspense>
                    </Router>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));