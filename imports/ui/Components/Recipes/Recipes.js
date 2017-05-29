import React, { Component } from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';

export default class Recipes extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      let nombre = e.target.name.value.trim();
      let tipo = this.refs.type.value.trim();
      let precio = e.target.price.value.trim();
      let tiempo = e.target.price.value.trim();
      let ingredients = e.target.price.value;

      if(nombre && tipo && precio && tiempo && ingredientes) {
        let recipe = {
          nombre,
          tipo,
          precio,
          tiempo,
          ingredients
        };
        Meteor.call('Recipes', recipe, (err) => {
          if (err) {
            alert(`Error, al agregar`);
          } else {
            alert('Se agrego exitosamente');
          }
        });
      }
    };
    render() {
        return (
          <form onSubmit={handleSubmit(e)}>
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
