import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Orders } from '../../../api/index';

class Listordenes extends Component {
    handleClickComplete (order) {
      Meteor.call('Orders.completarOrden', order._id, (err, res) => {
          if (!err) {
              alert('Proceso completado');
          } else {
              alert('No se pudo completar la operacion');
          }
      });
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
                                <li id="myOrders" key={order._id}>
                                    <div className="list-element">
                                        <div className="list-image">
                                            <img src="./icons/cook-hat.svg" alt=""/>
                                        </div>
                                        <div className="list-title" style={{margin: 0}}>
                                            <div className="title">
                                                Dirección de envío
                                            </div>
                                            <div className="content">
                                                {order.deliveryAddress}
                                            </div>
                                        </div>
                                        <div className="order-container" onClick={() => this.handleClickComplete(order) }>
                                            <div className="image-container">
                                                <img src="./icons/finished.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <div className="centered-content">
                                <img src="/icons/desert.svg" alt=""/>
                                <h1>No hay ordenes para mostrar</h1>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default createContainer((props) => {
    let data = Meteor.subscribe('orders-by-chef-skill', props.user !== undefined ? props.user.profile.skill : '');
    return {
        orders: Orders.find({}).fetch()
    };
}, Listordenes);
