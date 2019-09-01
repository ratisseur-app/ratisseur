import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components';

import "../../css/navbar.css"

export default class Sidebar extends Component
{
    constructor() {
        super();
    }

    state = {
        isOpen: false
    };

    /**
     * Permet d'ouvrir et fermer le menu dans la barre de navigation
     */
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <React.Fragment>
                <Aside className="px-0 col-12 col-md-3 col-lg-2">
                    <div className="main-navbar">
                        <Nav
                            className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light">
                            <NavItemLink to="/" className="w-100 mr-0 navbar-brand" style={{ lineHeight: '25px' }}>
                                <div className="d-table m-auto">
                                    {/*<Img id="main-logo" className="d-inline-block align-top mr-1"
                                         src={Brand}
                                         alt="Shards Dashboard"
                                         style={{ maxWidth: '50px'}} />*/}
                                    <h4 className="d-none d-md-inline ml-1">Ratisseur</h4>
                                </div>
                            </NavItemLink>
                            <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                                <i className="material-icons"></i>
                            </a>
                        </Nav>
                    </div>
                    <Form className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
                          style={{ display: 'flex', minHeight: '45px' }}>
                        <div className="ml-3 input-group input-group-seamless">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="material-icons">search</i>
                                </span>
                                <input placeholder="Search for something..." aria-label="Search" className="navbar-search form-control"/>
                            </div>
                        </div>
                    </Form>
                    <NavWrapper className="nav-wrapper">
                        <UlNav className="nav--no-borders flex-column nav">
                            <NavItem className="nav-item">
                                <NavItemLink className="nav-link active" aria-current="page" to="/">
                                    <ItemIcon className="d-inline-block item-icon-wrapper">
                                        <MaterialIcon className="material-icons">edit</MaterialIcon>
                                    </ItemIcon>
                                    <Span>Accueil</Span>
                                </NavItemLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavItemLink className="nav-link" to="/register">
                                    <ItemIcon className="d-inline-block item-icon-wrapper">
                                        <MaterialIcon className="material-icons">person</MaterialIcon>
                                    </ItemIcon>
                                    <Span>Catalogue</Span>
                                </NavItemLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavItemLink className="nav-link" to="#">
                                    <ItemIcon className="d-inline-block item-icon-wrapper">
                                        <MaterialIcon className="material-icons">note_add</MaterialIcon>
                                    </ItemIcon>
                                    <Span>Realisations</Span>
                                </NavItemLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavItemLink className="nav-link" to="#">
                                    <ItemIcon className="d-inline-block item-icon-wrapper">
                                        <MaterialIcon className="material-icons">view_module</MaterialIcon>
                                    </ItemIcon>
                                    <Span>Contacts</Span>
                                </NavItemLink>
                            </NavItem>
                        </UlNav>
                    </NavWrapper>
                </Aside>
            </React.Fragment>
        )
    }
}

const Aside = styled.aside`
    top: 0;
    position: fixed;
    height: 100vh;
    font-size: 1rem;
    background-color: #fff;
    z-index: 1070;
    will-change: transform;
    transition: -webkit-transform .2s ease-in-out;
    -webkit-transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;
    box-shadow: 0 0.125rem 9.375rem rgba(90,97,105,.1), 
        0 0.25rem 0.5rem rgba(90,97,105,.12), 
        0 0.9375rem 1.375rem rgba(90,97,105,.1), 
        0 0.4375rem 2.1875rem rgba(165,182,201,.1);
`;

const Nav = styled.nav`
    height: 3.75rem;
    border-bottom: 1px solid #e1e5eb!important;
    padding: 0!important;
    align-items: stretch!important;
    background-color: #fff!important;
    display: flex;
    justify-content: space-between;
`;

const Img = styled.img`
    margin-right: .25rem!important;
    display: inline-block!important;
    border-style: none;
`;

const Form = styled.form`
    min-height: 45px;
    border-right: 1px solid #e1e5eb!important;
    width: 100%!important;
`;

const NavWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 3.75rem - 1px);
    box-sizing: border-box;
`;

const UlNav = styled.ul`
    font-size: .875rem;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    flex-direction: column!important;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
`;

const NavItem = styled.li`
    white-space: nowrap;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    will-change: background-color,box-shadow,color;
    list-style: none;
`;

const ALink = styled.a`
    border-bottom: 0;
    font-weight: 400;
    padding: .9375rem 1.5625rem;
    white-space: nowrap;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    will-change: background-color,box-shadow,color;
    transition: box-shadow .2s ease,color .2s ease,background-color .2s ease;
    font-size: .85rem;
    display: block;
    
    &:hover {
        box-shadow: inset 0.1875rem 0 0 #007bff;
        background-color: #fbfbfb;
        color: #007bff;
    }
`;

const NavItemLink = styled(NavLink)`
    border-bottom: 0;
    font-weight: 400;
    padding: .9375rem 1.5625rem;
    white-space: nowrap;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    will-change: background-color,box-shadow,color;
    transition: box-shadow .2s ease,color .2s ease,background-color .2s ease;
    font-size: .85rem;
    display: block;
    
    &:hover {
        box-shadow: inset 0.1875rem 0 0 #007bff;
        background-color: #fbfbfb;
        color: #007bff;
    }
`;

const ItemIcon = styled.div`
    display: inline-block!important;
    color: #007bff;
    font-weight: 400;
    box-sizing: border-box;
    white-space: nowrap;
`;

const MaterialIcon = styled.i`
    color: #007bff;
    font-size: 1.125rem;
    top: -1px;
    min-width: 1.25rem;
    text-align: center;
    vertical-align: middle;
    will-change: color;
    transition: color .2s ease;
    margin-right: .375rem;
    color: #cacedb;
`;

const Span = styled.span`
    font-weight: 400;
    color: #3d5170;
`;