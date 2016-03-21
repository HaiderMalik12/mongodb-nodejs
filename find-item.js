var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/image-textile';
// find all the items firstName is staple and rate is 10.0
var itemFirstName = process.argv[2];
var itemRate = parseFloat(process.argv[3]);

MongoClient.connect(url, function(err, db) {

    var collection = db.collection('party');

    collection.find().toArray(err, function(items) {
        if (err) throw err;
       console.log(items);
    });
    db.close();
});