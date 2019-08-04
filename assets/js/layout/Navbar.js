import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

import "../../css/navbar.css"

export default class Navbar extends Component
{
    state = {
        isOpen: false
    };

    /**
     * Permet d'ouvrir et fermer le menu dans la barre de navigation
     */
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/*logo ratisseur*/}
                <div className="nav-header">
                    <Link to="/" className="nav-link navbar-brand"><h2>Ratisseur</h2></Link>
                </div>
                {/*boutton de menu en ecran reduit*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                {/*les menus*/}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/*menu de gauche*/}
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                    {/*menu de droite*/}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Connexion</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}