var express = require("express");
var users = require("../data/friends");
var path = require("path")

var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../../views/index.html"))
  });

router.get("/api/user", function(req,res){
    //get the json from the freinds file
    return res.json(users);
})

router.post("/api/post", function(req,res){
    //post the survey data here
    var newUser = req.body;
    newUser.name.replace(/\s+/g, "").toLowerCase();
    users.push(newUser);
    res.json(newUser);

})

module.exports = router;