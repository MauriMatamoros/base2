import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Navbar } from './common/index';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { CHEF_USER, ADMIN_USER, USER } from '../../environment/environment';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.renderNavbarContente = this.renderNavbarContente.bind(this);
        this.logout = this.logout.bind(this);
    }
    logout() {
        Meteor.logout((error) => {
            if (!error) {
                browserHistory.push('/')
            } else {
                alert('No se pudo cerrar sesion');
            }
        });
    }
    renderNavbarContente() {
        if (this.props.user) {
            switch (this.props.user.profile.role) {
                case CHEF_USER:
                    return (
                        <div className="navbar-container">
                            <div className="logo">
                                <img src="./icons/cook-hat.svg" alt=""/>
                            </div>
                            <span>eChef</span>
                            <div className="navigation-left">
                                <ul>
                                    <li>Ordenes</li>
                                </ul>
                            </div>
                            <div className="navigation-right">
                                <ul>
                                    <li onClick={this.logout}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    );
                case ADMIN_USER:
                    return (
                        <div className="navbar-container">
                            <div className="logo">
                                <img src="./icons/cook-hat.svg" alt=""/>
                            </div>
                            <span>eChef</span>
                            <div className="navigation-left">
                                <ul>
                                    <li>Recetas</li>
                                    <li>Subir Recetas</li>
                                </ul>
                            </div>
                            <div className="navigation-right">
                                <ul>
                                    <li onClick={this.logout}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    );
                case USER:
                    return (
                        <div className="navbar-container">
                            <div className="logo">
                                <img src="./icons/cook-hat.svg" alt=""/>
                            </div>
                            <span>eChef</span>
                            <div className="navigation-left">
                                <ul>
                                    <Link to='/recipes'><li>Recetas</li></Link>
                                    <Link to='/favorites'><li>Favoritos</li></Link>
                                </ul>
                            </div>
                            <div className="navigation-right">
                                <ul>
                                    <li onClick={this.logout}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    );
                default:
                    return (
                        <div className="navbar-container">
                            <div className="logo">
                                <img src="./icons/cook-hat.svg" alt=""/>
                            </div>
                            <span>eChef</span>
                        </div>
                    );
            }
        } else {
            return (
                <div className="navbar-container">
                    <div className="logo">
                        <img src="./icons/cook-hat.svg" alt=""/>
                    </div>
                    <span>eChef</span>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <Navbar>
                    <div className="navbar">
                        {this.renderNavbarContente()}
                    </div>
                </Navbar>
                <div className="container">
                    {this.props.children && React.cloneElement(this.props.children, {
                        user: this.props.user
                    })}
                </div>
            </div>
        );
    }
}

export default createContainer((props) => {
    return {
        user: Meteor.user()
    };
}, Layout);
