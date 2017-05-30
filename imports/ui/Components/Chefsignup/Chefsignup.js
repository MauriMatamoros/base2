import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Chefsignup extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
    }
    signup(){
        var username = this.refs.username.value;
        var password = this.refs.password.value;

        Accounts.createUser( { username: username, password: password, profile:
                {
                    skill: this.refs.cheftype.value,
                    address: this.refs.address.value,
                    salary: parseInt(this.refs.salary.value),
                    role: 'Chef'
                }
            }, function(error) {
                if (error) {
                    alert("there was an error: " + error.reason);
                } else {
                    browserHistory.push('/orders');
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
                            <h1>Crea una cuenta chef</h1>
                        </div>
                        <div className="paragraph">
                            Only with an account can you login to Starbucks.com and our mobile apps to get the most out of the Starbucks experience.
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="input-container">
                        <label>Habilidades del chef</label>
                        <div className="select-border">
                            <select name="types" ref="cheftype" id="types">
                                <option defaultValue value="">Seleccione el tipo</option>
                                <option value="Postres">Postres</option>
                                <option value="Ensaladas">Ensaladas</option>
                                <option value="Mariscos">Mariscos</option>
                                <option value="Comida China">Comida China</option>
                                <option value="Recetas rápidas">Recetas rápidas</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Datos de la personales</label>
                        <input type="text" ref="address" placeholder="Dirección"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="salary" placeholder="Salario"/>
                    </div>
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
