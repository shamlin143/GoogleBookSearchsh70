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
mongoose.connect(
  process.env.MONGO_URI || "mongodb://dritchie3:sevenhigh1@ds239858.mlab.com:39858/heroku_fckcbp36",
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


