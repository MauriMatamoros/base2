import React, { Component } from 'react';
import { Link } from 'react-router';
import { LOGGED_USER } from '../../../environment/environment';

class Login extends Component {
    componentWillMount() {
        this.props.passProps('HOLA');
    }
    render() {
        return (
            <div className="login-form">
                <div className="login-info">
                    <div className="text-container">
                        <div className="title">
                            <h1>Ingresa o crea una cuenta</h1>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="input-container">
                        <input type="text" ref="username" placeholder="Usuario o correo eléctronico"/>
                    </div>
                    <div className="input-container">
                        <input type="password" ref="password" placeholder="Contraseña"/>
                    </div>
                    <div className="input-container">
                        <button>Ingresar</button>
                    </div>
                    <div className="signup-container">
                        <div className="title">
                            Regístrate a eChef
                        </div>
                        <div className="signup-btn">
                            <Link to="/signup"><button>Registrarse ahora</button></Link>
                        </div>
                        <div className="info">
                            <div className="title">
                                Create an account and bring on the rewards!
                            </div>
                            <p>
                                Join Starbucks Rewards to earn free food and drinks,
                                get free refills, pay an order with your phone, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Login };
