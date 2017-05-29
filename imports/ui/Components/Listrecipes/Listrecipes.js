import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../../api/index';

class Listrecipes extends Component {
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
                                        <div className="favorites-container">
                                            <div className="image-container">
                                                <img src="./icons/star.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h1>No hay recetas</h1>  
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
