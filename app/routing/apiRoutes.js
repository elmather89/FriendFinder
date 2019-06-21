// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

console.log("apiRoute connected");

// link to dog data
var dogData = require("../data/friends.js");
// console.log(dogData);

module.exports = function(app) {    
    app.get("/api/friends", function(req, res) {
        res.json(dogData);
    });

    app.post("/api/friends", function(req, res) {

        var bestBud = { name: "", photo: "", compatibility: Infinity }
        var newDogData = req.body;
        var newDogScore = newDogData.scores;
        var scoreDiff;

        // loop thru dogData
        for (var i = 0; i < dogData.length; i++) {
            var possibleFriend = dogData[i];
            scoreDiff = 0;

            // loop thru dogData scores
            for (var s = 0; s < possibleFriend.scores.length; s++) {
                var loopedScore = possibleFriend.scores[s];
                var addedDogScore = newDogScore[s];
                
                //maths?
                scoreDiff = scoreDiff + Math.abs((addedDogScore) - (loopedScore));
                // console.log(scoreDiff);
            }

            if (scoreDiff <= bestBud.compatibility) {
                bestBud.name = possibleFriend.name;
                bestBud.photo = possibleFriend.photo;
                bestBud.compatibility = scoreDiff;
            }
            
        }

        dogData.push(newDogData);
        res.json(bestBud);

    });
};