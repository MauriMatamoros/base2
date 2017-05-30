import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../../api/index';

class Listrecipes extends Component {
  constructor(props) {
    super(props);
    this.handleClickComplete = this.handleClickComplete.bind(this);
  }
  handleClickComplete(recipe) {
    if (recipe) {
      let data = {
        deliverAddress: this.props.user.profile.address,
        username: this.props.user.username,
        recipe
      };
      Meteor.call('Orders.nuevaOrden', data, function (err) {
          if (err) {
              alert('No se pudo completar la operacion');
          } else {
            alert('Orden realizada');
          }
      });
    }
  }
    handleClickFavorites(recipe) {
      if (recipe) {
        Meteor.call('User.addFavorites', recipe, function (err) {
            if (err) {
                alert('No se pudo completar la operacion');
            }
        });
      }
    }
    render() {
        return (
            <div className="list-container">
                <div className="title">
                    <h1>Menú de eChef</h1>
                </div>
                <ul className="listing">
                    {
                        this.props.recipes.length > 0 ? (
                            this.props.recipes.map( recipe => (
                                <li key={recipe._id}>
                                    <div className="list-element">
                                        <div className="list-image">
                                            <img src="./icons/cook-hat.svg" alt=""/>
                                        </div>
                                        <div className="list-title">
                                            {recipe.nombre}
                                        </div>
                                        <div onClick={() => this.handleClickComplete(recipe)} className="order-container">
                                            <div className="image-container">
                                                <img src="./icons/order.svg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="favorites-container" onClick={() => this.handleClickFavorites(recipe)}>
                                            <div className="image-container">
                                                <img src="./icons/star.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                          <div className="centered-content">
                              <img src="/icons/desert.svg" alt=""/>
                              <h1>No hay recetas</h1>
                          </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default createContainer((props) => {
    let data = Meteor.subscribe('recipes');
    return {
        recipes: Recipes.find({}).fetch()
    };
}, Listrecipes);
