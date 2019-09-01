import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Main from "../layout/Main";


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
