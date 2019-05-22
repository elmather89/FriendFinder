$(document).ready(function () {
    // link to dog data
    // var dogData = require("../data/friends.js");

    var radioOptions = [
        {
            name: "q1",
            choice: ""
        },
        {
            name: "q2",
            choice: ""
        },
        {
            name: "q3",
            choice: ""
        },
        {
            name: "q4",
            choice: ""
        },
        {
            name: "q5",
            choice: ""
        }
    ];

    // q1 =================================================
    $("input[id='q1']").click(function () {
        var q1Choice = $(this).attr("value");
        console.log(q1Choice);
    });

    // q2 =================================================


    // q3 =================================================


    // q4 =================================================


    // q5 =================================================


    $("#submit").on("click", function (event) {
        event.preventDefault();

        var radioOptions = ["q1", "q2", "q3", "q4", "q5"];

        for (var i = 0; i < radioOptions.length; i++) {
            var radioValue = $("input[name=' + [i] + ']:checked").val();
            if (radioValue) {
                console.log(radioValue);
            }
        };

        var input = {
            name: $("#first_name").val().trim(),
            photo: $("#photo").val().trim(),
            score: [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim()
            ]
        };
        // console.log(input.score);

        $.post("/api/friends", input, function (answer) {
            $("#first_name").text(answer.name);
            $("#photo").attr(answer.name);
            $("#score").attr(answer.name);
        });

        // dogData.push(input);
        $("#first_name").val("");
        $("#photo").val("");
        $("#q1").val("");
        $("#q2").val("");
        $("#q3").val("");
        $("#q4").val("");
        // console.log("clicked");    
    });
});