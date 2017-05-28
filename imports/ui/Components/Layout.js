import React, { Component } from 'react';
import { Navbar } from './common/index';
import { LOGGED_USER } from '../../environment/environment';

class Layout extends Component {
    passProps(params) {
        switch (params) {
            case LOGGED_USER:
                return (
                    <div className="navbar-container">
                        <div className="logo">
                            <img src="./icons/cook-hat.svg" alt=""/>
                        </div>
                        <div className="navigation-left">
                            <ul>
                                <li>Menú</li>
                                <li>Menú</li>
                                <li>Menú</li>
                                <li>Menú</li>
                                <li>Menú</li>
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
