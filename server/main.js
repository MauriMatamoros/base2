import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/api/index';
import { Orders } from '../imports/api/index';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.methods({
    'Recipes.nuevaReceta'( data ) {
      var nuevaReceta = {
        ingredientes: data.ingredients,
        tipo: data.tipo,
        tiempo: data.tiempo,
        precio: data.precio
      }
      Recipes.insert( nuevaReceta);
      return 'ok';
    }

    'Orders.nuevaOrden'( data ){
      var nuevaOrden = {
        deliveryAddress: data.deliverAddress,
        username: data.username,
        tipoReceta: data.tipoReceta;
      }

      Orders.insert( nuevaOrden );
      return 'ok';
    }
  });
});
