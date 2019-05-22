$(document).ready(function () {
    // link to dog data
    // var dogData = require("../data/friends.js");

    $("#submit").on("click", function(event) {
      event.preventDefault();

      var newDog = {
        name: $("#first_name").val().trim(),
        photo: $("#photo").val().trim()
      };
    //   console.log(newDog);

      $.post("/api/friends", newDog)
        .then(function(data) {
          console.log(data);
          alert("Adding your pup...");
        });
    });

});
