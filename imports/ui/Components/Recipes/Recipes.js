import React, { Component } from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { CHEF_USER, USER, ADMIN_USER } from '../../../environment/environment';

export default class Recipes extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidUpdate() {
    //     if(this.props.user) {
    //         if (this.props.user.profile.role === USER) {
    //             // browserHistory.push('/recipes');
    //         }
    //         if (this.props.user.profile.role === CHEF_USER) {
    //             // browserHistory.push('/orders');
    //         }
    //         if (this.props.user.profile.role === ADMIN_USER) {
    //             // browserHistory.push('/dashboard');
    //         }
    //     }
    // }
    handleSubmit(e) {
      e.preventDefault();
      let nombre = this.refs.name.value;
      let tipo = this.refs.type.value;
      let precio = this.refs.price.value;
      let tiempo = this.refs.time.value;
      let ingredients = this.refs.ingredients.value;

      if(nombre && tipo && precio && tiempo && ingredients) {
        let recipe = {
          nombre,
          tipo,
          precio,
          tiempo,
          ingredients
        };
        Meteor.call('Recipes.nuevaReceta', recipe, (err) => {
          if (err) {
            alert(`Error, al agregar`);
          } else {
              this.refs.name.value = ''
            this.refs.type.value = ''
            this.refs.price.value = ''
            this.refs.time.value = ''
            this.refs.ingredients.value = ''
            alert('Se agrego exitosamente');
          }
        });
      }
    };
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="recipes-form">
                <div className="title">
                    Agrega tus recetas
                </div>
                <div className="paragraph">
                    Llena el siguiente formulario para poder registrar las recetas que tus usuarios seleccionaran para realizar una orden
                </div>
                <div className="form-container">
                    <div className="textarea-container">
                        <textarea ref="ingredients" placeholder="Ingredientes"/>
                    </div>
                    <div className="input-container">
                        <div className="select-border">
                            <select ref="type" name="types" id="types">
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
                        <input type="text" ref="name" placeholder="Nombre"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="time" placeholder="Tiempo"/>
                    </div>
                    <div className="input-container">
                        <input type="text" ref="price" placeholder="Precio"/>
                    </div>
                    <div className="input-container">
                        <button>Guardar</button>
                    </div>
                </div>
            </div>
          </form>
        );
    }
}
