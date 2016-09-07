var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittySchema = new Schema( {
  name: String,
  color: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";

  console.log(greeting);
}

var url = 'mongodb://localhost:27017/testUC'
mongoose.connect(url);

var db = mongoose.connection;

db.once('open', function () {
  var Kitten = mongoose.model('Kitten', kittySchema);

  var fluffy = new Kitten({ name: 'fluffy', color: 'Black' });

  fluffy.save(function (err, fluffy) {
    if (err)
      console.log(err);
    console.log("Save Succesfull");
    fluffy.speak();

    Kitten.find(function (err, kittens) {
      kittens.forEach(function (kitten) {
        console.log("{" + kitten.name + ", " + kitten.color + "}");
      })

      db.close();
    });
  })
});
