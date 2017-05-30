import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../../api/index';

class Favoriterecipes extends Component {
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
                                <li>
                                    <div className="list-element">
                                        <div className="list-image">
                                            <img src="./icons/cook-hat.svg" alt=""/>
                                        </div>
                                        <div className="list-title">
                                            {recipe.nombre}
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <div className="centered-content">
                                <img src="/icons/desert.svg" alt=""/>
                                <h1>No hay recetas favoritas</h1>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default createContainer((props) => {
    let data = Meteor.subscribe('recipes-favorites');
    return {
        recipes: Recipes.find({}).fetch()
    };
}, Favoriterecipes);
