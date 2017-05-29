import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
    constructor(props) {
      super(props);
      this.signup = this.signup.bind(this);
    }
    signup(){
      var nombre = this.refs.name.value;
      var apellido = this.refs.lastname.value;
      var domicilio = this.refs.address.value;
      var username = this.refs.username.value;
      var password = this.refs.password.value;
      var numTarjeta = this.refs.creditcard.value;
      var codigo = this.refs.securitycode.value;

      Accounts.createUser( { username: username, password: password, profile:
        {
          name: nombre,
          lastname: apellido,
          address: domicilio,
          creditcard: numTarjeta,
          securitycode: codigo,
          role: 'Cliente'
        }
       }, function(error) {
        if (error) {
          alert("there was an error: " + error.reason);
        } else {
          browserHistory.push('/recipes');
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
                            <h1>Crea una cuenta</h1>
                        </div>
                        <div className="paragraph">
                            Only with an account can you login to Starbucks.com and our mobile apps to get the most out of the Starbucks experience.
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="input-container">
                        <label>Personal Info</label>
                        <input type="text" id="name" ref="name" placeholder="Nombre"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="lastname" placeholder="Apellido"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="address" placeholder="Domicilio"/>
                    </div>
                    <div className="input-container">
                        <label>Datos de la cuenta</label>
                        <input type="text" ref="username" placeholder="Usuario o correo eléctronico"/>
                    </div>
                    <div className="input-container">
                        <input type="password" ref="password" placeholder="Contraseña"/>
                    </div>
                    <div className="input-container">
                        <label>Datos de págo</label>
                        <input type="text" ref="creditcard" placeholder="Numero de tarjeta (16 dígitos)"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="securitycode" placeholder="Código de seguridad"/>
                    </div>
                    <div className="input-container" style={{marginTop: 55}}>
                        <button onClick={this.signup}>Registrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Signup };
