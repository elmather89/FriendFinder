// Your server.js file should require the basic npm packages we've used in class: express and path.
var express=require("express")
var htmlRoutes = require("./routing/htmlRoutes");
var apiRoutes = require("./routing/apiRoutes");
var app = express();

app.use (express.json());
app.use (express.urlencoded({extended: true}));

var port = 8080;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(port,function(){
    console.log("Server listening on port " + port);
});
