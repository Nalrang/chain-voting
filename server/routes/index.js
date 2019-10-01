var mongoose = require('mongoose');
var User = mongoose.model('User');
var Vote = mongoose.model('Vote');

var async = require('async');

module.exports = function (app) {
  app.get('/', getHome);
  app.get('/user', getUsers);
  app.post('/add_user', addUser);
}

/* GET home page. */
var getHome = function (req, res) {
  res.render('index', { title: 'Express' });
}

var getUsers = function (req, res) {
 
  var userFind = User.find();
  userFind.exec(function (err, docs) {
    if (err || !docs) {
      console.error("userFind error: " + err);
      console.error(req.body);
      res.write(JSON.stringify({"error": true}));
    } 
    else {
      res.write(JSON.stringify(docs));
    }
    res.end();
  });
}

var addUser = function (req, res) {
  //res.send('add user');
  (async () => {
    await createSchema();
    res.end();
  }) ();
  
}

var createSchema = function (res) {
  var query = { "type": "admin", "email": "test@test.com", "pwd": "123" };
  var query2 = { "registrant": "admin", "voter": ["test@test.com", "test2@test.com"], "topic": "topic1" };

  User.countDocuments({}, function (err, res) {
    console.log("user count", res);
    if(!res) {
      console.log("ADD first");
      var createUser = new User(query);
      createUser.save();
    }
    
  })

  Vote.collection.insertOne(query2);

}