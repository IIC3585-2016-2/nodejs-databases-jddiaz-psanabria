var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test_mysql'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log("Error connecting database ...");
}
});

app.get("/",function(req,res){
connection.query('SELECT * from node_frameworks LIMIT 2', function(err, rows, fields) {
connection.end();
if (!err){
  for(var i = 0; i < rows.length; i++)
    console.log('name:'+rows[i].name+' ['+rows[i].website+']');
}
else{
  console.log('Error while performing Query.');
}
  });
});

app.get("/save",function(req,res){
  var post  = {name: 'other_framework',website: 'www.other.com'};
  var query = connection.query('INSERT INTO node_frameworks SET ?', post, function(err, result) {
    console.log(result);
  });
  console.log(query.sql);
});

app.listen(3000);
