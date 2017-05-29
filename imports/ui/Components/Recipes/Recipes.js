import React, { Component } from 'react';
import { Roles } from 'meteor/alanning:roles';
import { createContainer } from 'meteor/react-meteor-data';
import { USER, CHEF_USER, ADMIN_USER} from '../../../environment/environment';

class Recipes extends Component {
    componentWillMount() {
        if (Roles.userIsInRole(Meteor.userId(), 'admin-group', 'eChef.com')) {
            this.props.passProps(ADMIN_USER);
        }
        if (Roles.userIsInRole(Meteor.userId(), 'chef-group', 'eChef.com')) {
            this.props.passProps(CHEF_USER);
        }
        if (Roles.userIsInRole(Meteor.userId(), 'client-group', 'eChef.com')) {
            this.props.passProps(USER);
        }
    }
    render() {
        return (
            <div className="recipes-form">
                <div className="title">
                    Agrega tus recetas
                </div>
                <div className="paragraph">
                    Llena el siguiente formulario para poder registrar las recetas que tus usuarios seleccionaran para realizar una orden
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
                </div>
            </div>
        );
    }
}

export { Recipes };