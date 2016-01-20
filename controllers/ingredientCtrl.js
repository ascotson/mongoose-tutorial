var ingredientModel = require('./../models/ingredientModel'); //this is the custom require we created in ingredientModel.js.
//passing in the constructor function mongoose.model(ingredientSchema) in the require & assigning it to the variable ingredientModel (which is helpfully named the same as our ingredientModel.js file that we just required in);
module.exports = {
  create: function(req, res){ //create property on the export - i.e. when this file is required.
    var ingredient = new ingredientModel(req.body); //creating a new function with the constructor function mongoose.model.ingredientSchema, passing in the request body data as a parameter, and assigning that new function to the variable ingredient.

    ingredient.save(function(err, result) { //assigning the result of the function as a property named 'save' on the ingredient method (property that is a funciton).
      res.send(result);  //assigning the result of this function to the .create property on this export.
    });  //inherent in model.save - if it does exist then .save will update. If it doesn't exist .save will create.
    console.log('You totally OWNED that POST dude!');
  },

  read: function(req, res) {
    ingredientModel.find({}, function(err, result) { //using the find method on mongoose.model and NOT using the constructor function mongoose.model.ingredientSchema.
      res.send(result); //findOne will find one, find will find all. Read more about the find & findOne method of mongoose.
    });
    console.log('You GOT it dude');
  }
};

/* MODEL PROPERTIES:
find
findOne
update
findByIdAndUpdate
create
modify
findAndModify
save
findByIdAndRemove
*/
