import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Orders } from '../../../api/index';

class Listordenes extends Component {
    handleClickComplete (order) {
      Meteor.call()
    }
    render() {
        return (
            <div className="list-container">
                <div className="title">
                    <h1>Ordenes para el chef</h1>
                </div>
                <ul className="listing">
                    {
                        this.props.orders.length > 0 ? (
                            this.props.orders.map( order => (
                                <li>
                                    <div className="list-element">
                                        <div className="list-image">
                                            <img src="./icons/cook-hat.svg" alt=""/>
                                        </div>
                                        <div className="list-title">
                                            {order.nombre}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="./icons/order.svg" alt=""/>
                                            </div>
                                        </div>
                                        <div>
                                            <div onClick={() => this.handleClickComplete(order)}>
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
