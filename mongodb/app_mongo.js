var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

var url = 'mongodb://localhost:27017/testUC'

function insertDocuments(db, callback) {
  var collection = db.collection('documents');

  collection.insertMany([
    {a : 1},
    {b : 2},
    {c : 3}
  ], function (error, result) {
    assert.equal(error, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);

    console.log("Inserted 3 documents into the collection");

    callback(result);
  });
}

function showAllDocuments(db, callback) {
  var collection = db.collection('documents');

  collection.find({}).toArray(function (error, docs) {
    assert.equal(error, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  })
}

MongoClient.connect(url, function (error, db) {
  assert.equal(null, error);
  console.log("Connection Succesfull");

  insertDocuments(db, function () {
    showAllDocuments(db, function() {
      db.close();
    })
  })
});
