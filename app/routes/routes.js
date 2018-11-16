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
    var newUser = req.body 
    console.log(`data from routes`,newUser);
    

    var bestMatch;
    var bestDiff = 1000; 
    //match finder
    users.forEach(e => {

        console.log(`comparing your reults with ${e.name}`)
        
        var totDif = 0;

        for(var i = 0; i < 10; i++ ){

            totDif += Math.abs(e.scores[i] - newUser.scores[i])
        }

        if(totDif < bestDiff){
            bestDiff = totDif;
            bestMatch = e;
        }
        

    });

    //resolve
    users.push(newUser);
    res.json(bestMatch);

})

module.exports = router;