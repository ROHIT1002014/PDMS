var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// var urlEncoderParser = bodyParser.urlencoded({ extended: false })

var data = [
  { item: 'get milk'},
  { item: 'read book'},
  { item: 'do exercise'},
  { item: 'talk to someone'},
  { item: 'walk dog'}
]


module.exports = function(app){

  // app.get('/todo', function(req, res) {
  //     res.render('todo.ejs', {data: data});
  // });

  app.get('/', function(req, res) {
      res.render('base.ejs', {data: data});
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