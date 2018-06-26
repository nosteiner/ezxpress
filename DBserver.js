//server-side 
 
var Server = require("http").Server;
var express = require("express");
 
//important stuff
var live = require("mysql-live").live;
 
//or ES6 syndax: import live from "mysql-live";
 
var app = express();
var http = Server(app);
 
var mysqlConnectionString="mysql://kataras:pass@127.0.0.1/taglub?debug=false&charset=utf8";
 
//you can have multiple mysql server in the same project, just assign the variable.
var Mysql = live(mysqlConnectionString,http);
//
 
//Collection initialization
var usersCollection = Mysql.Collection("usersCollection", "users"); 
//
 
Mysql.publish("allUsers", usersCollection);
 
//and you can do something like that too, both .publish can exists.
Mysql.publish("userById", function(userid){
    var criteria = usersCollection.selector()
                   .where("userId").eq(userid)
                   .build();
                   
    return usersCollection.find(criteria);
});
 
var server = http.listen(8080, function(){
    console.log("=============================");
    console.log("Server started at port 8080");
    console.log("=============================");
});
 