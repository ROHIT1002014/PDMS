var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userAuth = require('./../routers/userAuth');
mongoose.connect('mongodb://localhost:27017/PDMS', { useNewUrlParser: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!")
});

//Defining schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  lastLogin: String
});

//Compiling schema to model
const User = mongoose.model('Users', userSchema);

//Test
const user = new User({ username: "Spandan",
  password: "Sparsh",
  lastLogin: "26/08/2020" });
console.log(user.username);

// Save
user.save(function (err, user) {
    if (err) return console.error(err);
    console.log(user.username);
  });

var data = [
  { item: 'get milk'},
  { item: 'read book'},
  { item: 'do exercise'},
  { item: 'talk to someone'},
  { item: 'walk dog'}
]


module.exports = function(app){
  app.use(bodyParser.urlencoded({ extended: true }));

  // user login routes
  userAuth(app);

  // app.get('/todo', function(req, res) {
  //     res.render('todo.ejs', {data: data});
  // });

  app.get('/', function(req, res) {
      res.render('base/home.ejs', {data: data});
  });

  app.get('/products', function(req, res) {
      res.render('main/products.ejs', {data: data});
  });

  // app.post('/todo',urlEncoderParser, function(req, res) {
  //   data.push(req.body);
  //   res.json(data)
  // });

  // app.delete('/todo/:item', function(req, res) {
  //     data = data.filter(function(todo){
  //       return todo.item.replace(/ /g, '-') !== req.params.item;
  //     })

  //     res.json(data);
  // });
};