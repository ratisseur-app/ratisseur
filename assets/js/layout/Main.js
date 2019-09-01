import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default class Main extends Component{
    render(){
        return (
            <React.Fragment>
                <Sidebar/>
                <div className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
                    <Navbar/>
                </div>
            </React.Fragment>
        )
    }
}