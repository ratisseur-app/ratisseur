import React, {Component} from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components';
import ImgLogo from '../../img/logo2.png';
import 'semantic-ui-css/semantic.min.css'

const DropdownProfilMenu = () => (
    <Menu>
        <Dropdown text='Mickael Louzet' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Header>Email</Dropdown.Header>
                <Dropdown.Item>Profil</Dropdown.Item>
                <Dropdown.Item>Messages</Dropdown.Item>
                <Dropdown.Item>Parametres</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Deconnexion</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
);

export default class Navbar extends Component{

    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        });
    }

    render(){
        return (
            <React.Fragment>
                <MainNavbar>
                    <DivContainer>
                        <Nav>
                            <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                                <InputGroup className="ml-3 input-group input-group-seamless">
                                    <InputGroupPrepend className="input-group-prepend">
                                        <SpanGroupText className="input-group-text">
                                            <i className="material-icons">search</i>
                                        </SpanGroupText>
                                    </InputGroupPrepend>
                                    <input placeholder="Search for something..." className="navbar-search form-control" />
                                </InputGroup>
                            </Form>
                            <UlNav>
                                <DropdownProfilMenu/>
                            </UlNav>
                        </Nav>
                    </DivContainer>
                </MainNavbar>
            </React.Fragment>
        )
    }
}

const MainNavbar = styled.div`
    top: 0;
    z-index: 1020;
    position: sticky;
    box-sizing: border-box;
    background-color: #fff!important;
    box-shadow: 0 0.125rem 0.625rem rgba(90,97,105,.12);
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

const Form = styled.form`
    min-height: 45px;
    border-right: 1px solid #e1e5eb!important;
    width: 100%!important;
`;

const InputGroup = styled.div`
    min-width: 7.5rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
`;

const InputGroupPrepend = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
    margin-right: -1px;
`;

const SpanGroupText = styled.span`
    background: 0 0;
    border: none;
`;

const UlNav = styled.ul`
    display: flex;
    border-left: 1px solid #e1e5eb!important;
    flex-direction: row!important;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
`;

const DivContainer = styled.div`
    padding: 0!important;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`;

const DropdownNav = styled.div`
    position: relative;
    box-sizing: border-box;
    display: block;
    list-style: none;
`;

const DropdownMenu = styled.a`
    min-width: 3.75rem;
    color: rgba(0,0,0,.5);
    text-decoration: none;
    font-size: .8125rem;
    font-weight: 400;
    text-decoration: none;
    padding: .625rem;
    transition: all .25s cubic-bezier(.27,.01,.38,1.06);
    padding-left: 1rem!important;
    padding-right: 1rem!important;
    display: block;
    white-space: nowrap!important;
`;

const UserSpan = styled.span`
    white-space: nowrap!important;
    font-size: .8125rem;
    font-weight: 400;
    color: rgba(0,0,0,.5);
    box-sizing: border-box;
`;

const UserImage = styled.img`
    max-width: 2.5rem;
    margin-right: .5rem!important;
    border-radius: 50%!important;
    vertical-align: middle;
    border-style: none;
`;