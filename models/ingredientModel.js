var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({  //1. Creating a new constructor function called Schema as a method on the mongoose object, and assigning it to the variable ingredientSchema.
  expirationDate: {type: 'Date'},  //Note: Mongoose syntax pattern requires type use a capital first letter.
  amount: {type: 'Number'},
  name: {type: 'String'},
  cost: {type: 'Number'},
  vendor: {type: 'String'},
  qtyPerOrder: {type: 'Number'}
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
//2. Passing the newly created Schema constructor function method on the mongoose object into the model property on the mongoose object.
// The mongoose.model property has a TON of stuff on it so we can use mongoose.model for a variety of things.
// When we pass in the constructor function (named 'ingredientSchema' in this case) this constructor function is assigned as a method
// on the mongoose.model object, i.e. mongoose.model.ingredientSchema.
// Having assigned the constructor function to mongoose.model we then export that in a require.

/*The permitted Schema Types are:
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
*/
