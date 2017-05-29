import React, { Component } from 'react';
import { Navbar } from './common/index';
import { CHEF_USER, ADMIN_USER, USER } from '../../environment/environment';

class Layout extends Component {
    passProps(params) {
        switch (params) {
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
                                <li>Recetas</li>
                                <li>Favoritos</li>
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
    }
    render() {
        return (
            <div>
                <Navbar>
                    {this.passProps()}
                </Navbar>
                <div className="container">
                    {this.props.children && React.cloneElement(this.props.children, {
                        passProps: this.passProps.bind(this)
                    })}
                </div>
            </div>
        );
    }
}

export { Layout };
