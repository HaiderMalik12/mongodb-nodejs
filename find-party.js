var mongo = require('mongodb').MongoClient;
var firstName_ = process.argv[2];
var url = 'mongodb://localhost:27017/image-textile';
mongo.connect(url, function(err, db) {

    if (err) throw err;
    var parties = db.collection('party');
    parties.find({
        firstName: firstName_
    }).toArray(function(err, docs) {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});