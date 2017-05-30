import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/api/index';
import { Orders } from '../imports/api/index';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('recipes', () => {
    return Recipes.find({});
  });

  Meteor.publish('orders-by-chef-skill', (skills) => {
    return Orders.find({
      tipoReceta: skills
    });
  });

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
    },
    'User.addFavorites'( data ) {
        if (this.userId) {
            var currentUser = Meteor.users.findOne({_id: this.userId});
            var myFavorites = currentUser.profile.favorites;
            if (myFavorites) {
                myFavorites.push(data);
            } else {
                myFavorites = [data];
            }
            currentUser.profile.favorites = myFavorites;
            Meteor.users.update(this.userId, {
                $set: {
                    profile: currentUser.profile
                }
            });
        } else {
            throw 'Error';
        }
    },
    'Orders.nuevaOrden'( data ){
      var nuevaOrden = {
        deliveryAddress: data.deliverAddress,
        username: data.username,
        tipoReceta: data.tipoReceta
      }

      Orders.insert( nuevaOrden );
      return 'ok';
    }
  });
});
