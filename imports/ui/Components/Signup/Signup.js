import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {
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
                        <button>Registrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Signup };
