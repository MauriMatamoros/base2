import React, { Component } from 'react';
import { Link } from 'react-router';
import { LOGGED_USER } from '../../../environment/environment';

import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
    }

    login(){
      var username = this.refs.username.value;
      var password = this.refs.password.value;

      var user = Meteor.loginWithPassword( username, password, function(error) {
        if (error) {
          alert("there was an error: " + error.reason);
        } else {
          console.log(user);
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
                        <button onClick={this.login}>Ingresar</button>
                    </div>
                    <div className="signup-container">
                      <Link to="signup" className="register-link">
                        <div className="title">
                            Regístrate a eChef
                        </div>
                      </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export { Login };
