import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/api/index';
import { Orders } from '../imports/api/index';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('recipes', () => {
    return Recipes.find({favorite: false, ordered: false});
  });

  Meteor.publish('recipes-favorites', () => {
    return Recipes.find({favorite: true, ordered: false});
  });

  Meteor.publish('orders-by-chef-skill', (skills) => {
    return Orders.find({
      'receta.tipo': skills,
      complete: false
    });
  });

  Meteor.methods({
    'Recipes.nuevaReceta'( data ) {
      var nuevaReceta = {
        ingredientes: data.ingredients,
        tipo: data.tipo,
        tiempo: data.tiempo,
        precio: data.precio,
        favorite: false,
        ordered: false,
        nombre: data.nombre
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
            Recipes.update(data._id, {
                $set: {
                    favorite: true
                }
            })
        } else {
            throw 'Error';
        }
    },
    'Orders.nuevaOrden'( data ){
      var nuevaOrden = {
        deliveryAddress: data.deliverAddress,
        username: data.username,
        receta: data.recipe,
        complete: false
      }

      Orders.insert( nuevaOrden );

      Recipes.update(data.recipe._id, {
        $set: {
          ordered: true
        }
      });
      return 'ok';
    },
    'Orders.completarOrden'( id ){
      Orders.update( id, {
          $set: {
            complete: true
          }
      } );
      return 'ok';
    }
  });
});
