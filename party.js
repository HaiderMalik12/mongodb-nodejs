var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/image-textile';
MongoClient.connect(url, function(err, db) {

    var collection = db.collection('party');
    // Insert party
    collection.insert({
        firstName: 'burj',
        lastName: 'Bank',
        credit: 1000.0,
        debit: 1000.0,
        balance: 1000.0
    }, function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log('Data Inserted');
    });


});