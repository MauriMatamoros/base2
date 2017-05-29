import { Meteor } from 'meteor/meteor';
import { Recipes } from '../imports/api/index'

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.methods({
    'Recipes.nuevaReceta'( data ) {
      var nuevaReceta = {
        ingredientes: data.ingredientes,
        tipo: data.tipo,
        tiempo: data.tiempo,
        precio: data.precio
      }
      Recipes.insert( nuevaReceta);
      return 'ok';
    }
  });
});
