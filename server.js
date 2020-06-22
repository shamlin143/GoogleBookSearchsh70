const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);




// set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/googlebooks");
mongoose.connect(process.env.Mongo_URI || "mongodb://heroku_pklwclk7:ohpgo03sb1emivl4egth50h7ii@ds145639.mlab.com:45639/heroku_pklwclk7")


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


