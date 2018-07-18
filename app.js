var http = require("http");
var express = require("express");
var app = express();

app.get("/",function(req, resp) {
    resp.end("<h1>Hello NodeJS Example Project ...</h1>");
});

var mysql_dbc = require('./db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

http.createServer(app).listen(3000, function() {
    console.log("start node server .... prot: 3000");
    mysql_dbc.test_open(connection);
});