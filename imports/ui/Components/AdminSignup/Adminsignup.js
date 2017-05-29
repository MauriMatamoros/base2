import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Adminsignup extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
    }
    signup(){
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        Accounts.createUser( { username: username, password: password, profile:
                {
                    role: 'Admin'
                }
            }, function(error) {
                if (error) {
                    alert("there was an error: " + error.reason);
                } else {
                    browserHistory.push('/dashboard');
                };
            }
        );
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-info">
                    <div className="text-container">
                        <div className="title">
                            <h1>Crea una cuenta administrador</h1>
                        </div>
                        <div className="paragraph">
                            Only with an account can you login to Starbucks.com and our mobile apps to get the most out of the Starbucks experience.
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="input-container">
                        <label>Datos de la cuenta</label>
                        <input type="text" ref="username" placeholder="Usuario o correo eléctronico"/>
                    </div>
                    <div className="input-container">
                        <input type="password" ref="password" placeholder="Contraseña"/>
                    </div>
                    <div className="input-container" style={{marginTop: 55}}>
                        <button onClick={this.signup}>Registrar</button>
                    </div>
                </div>
            </div>
        );
    }
}
