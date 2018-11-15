var express = require("express");
var users = require("../data/friends");
var path = require("path")

var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../../views/index.html"))
  });

router.get("/api/friends", function(req,res){
    //get the json from the freinds file
    return res.json(users);
})

router.post("/api/friends", function(req,res){
    //post the survey data here
    console.log(`data from routes`,req.body);
    users.push(req.body);
    res.json(true);

})

module.exports = router;