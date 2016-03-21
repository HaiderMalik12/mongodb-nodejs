var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];
var rate = process.argv[4];
var qty = process.argv[5];
var unit = process.argv[6];

// Item Document
var itemDoc = {
    firstName: firstName,
    lastName: lastName,
    rate: 10.0,
    quatity: 100,
    unit: 'm'
}

var url = 'mongodb://localhost:27017/image-textile';

// connect 
mongo.connect(url, function(err, db) {
    if (err) throw err;

    var collection = db.collection('item');

    // insert item document
    collection.insert(itemDoc, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(itemDoc));
        db.close();
    });
});