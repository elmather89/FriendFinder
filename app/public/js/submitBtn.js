$(document).ready(function () {
    // link to dog data
    var dogData = require("../data/friends.js");

    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");

        var input = {
            name: $("#first_name").val().trim(),
            photo: $("#photo").val().trim(),
            score: [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
            ]
        };
        dogData.push(input);
    });
});