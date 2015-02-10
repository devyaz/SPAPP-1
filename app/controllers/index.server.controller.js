var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('SPAPP', server, {w:1});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'SPAPP' database");       
    } else {
    	console.log("ERROR: Not connected to DB");
    }
});

exports.render = function(req, res) {

	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title : 'Hello World'
	})
};

exports.findAllGroups = function(req, res) {
	db.collection('groups', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
    
};
 
exports.findGroupById = function(req, res) {    
	db.collection('groups', function(err, collection) {
        collection.findOne({_id: new BSON.ObjectID(req.params.id)}, function(err, items) {
            res.send(items);
        });
	});
	
};


