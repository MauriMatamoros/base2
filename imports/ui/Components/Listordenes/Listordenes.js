import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Orders } from '../../../api/index';

class Listordenes extends Component {
    handleClickFavorites(recipe) {
      e.preventDefault();
      if (recipe) {
        Meteor.call('User.addFavorites',recipe, (err) => {
          if (err) {
            alert('No se pudo agregar a favoritos');
          }else {
            alert('Se ha agregado exitosamente');
          }
        })
      }
    };
    render() {
        return (
            <div className="list-container">
                <div className="title">
                    <h1>Ordenes para el chef</h1>
                </div>
                <ul className="listing">
                    {
                        this.props.orders.length > 0 ? (
                            this.props.recipes.map( recipe => (
                                <li>
                                    <div className="list-element">
                                        <div className="list-image">
                                            <img src="./icons/cook-hat.svg" alt=""/>
                                        </div>
                                        <div className="list-title">
                                            {recipe.nombre}
                                        </div>
                                        <div className="favorites-container" onClick={() => this.handleClickFavorites(recipe)}>
                                            <div className="image-container">
                                                <img src="./icons/star.svg" alt=""/>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="./icons/order.svg" alt=""/>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="./icons/finished.svg" style={{width:25 + "%"}} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h1>No hay ordenes listas</h1>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default createContainer((props) => {
    let data = Meteor.subscribe('orders-by-chef-skill');
    return {
        orders: Orders.find({}).fetch()
    };
}, Listordenes);
