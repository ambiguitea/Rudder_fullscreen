/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require("express");
var path = require("path");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile("Default.html", {root: path.join(__dirname, "/public")});
})

app.get("/Contact", function(req, res) {
    res.sendFile("Contact.html", {root: path.join(__dirname, "/public")});
})

app.get("/Courses", function(req, res) {
    res.sendFile("Courses.html", {root: path.join(__dirname, "/public")});
})

app.listen(8000, function() {
    console.log("Listening on 8000.");
})