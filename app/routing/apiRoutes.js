// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

console.log("apiRoute connected");

// link to dog data
var dogData = require("../data/friends");
// console.log(dogData);

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(dogData);
    });

    app.post("/api/friends", function(req, res) {
        var newDog = req.body;
        console.log(newDog);

        for (var i = 0; i < newDog.scores.length; i++) {
            newDog.scores[i] = parseInt(newDog.scores[i]);
        }

        var bestMatch = 0;
        var minDiff = 20;

        for (var i = 0; i < dogData.length; i++) {
            var totalDiff = 0;

            for (var j = 0; j < dogData[i].scores.length; j++) {
                var calcDiff = Math.abs(newDog.scores[j] - dogData[i].scores[j]);
                totalDiff = totalDiff + calcDiff;
            }

            if (totalDiff < minDiff) {
                bestMatch = i;
                minDiff = totalDiff;
            }
        }
        dogData.push(newDog);
        res.json(dogData[bestMatch]);
    });
};