const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

//Setup Database
const database = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fenkl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//Middleware
const bodyParser = require("body-parser");

const app = express();

const httpError = require("./models/http-error");

//This will parse any incoming req body and extract json and convert to regular js obj.
app.use(bodyParser.json());

//Giving access for image request for frontend with help of general middleware
//express.static means just returns the requested file and not execute anything
//path.join is combine the path eg  "uploads", "images" => uploads/images
//Any files requested within the below path, will be returns
app.use("/uploads/images", express.static(path.join("uploads", "images")));

/* console.log(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
}); */

app.use(cors());

const serviceAPI = require("./routes/services.route");
const socialAPI = require("./routes/socials.route");

app.use(`/api/${process.env.DB_NAME}/service`, serviceAPI);
app.use(`/api/${process.env.DB_NAME}/social`, socialAPI);

app.use(express.static(path.join("public")));
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//Common error message for unsupported routes request
//hide below code if we deploy both client and server in same host
/* app.use((req, res, next) => {
  throw new httpError("Could not find this route", 404);
}); */

app.use((error, req, res, next) => {
  if (req.file) {
    //if the request something fails, we have to remove the stored file on this disk
    fs.unlink(req.file.path, (err) => console.log(err));
  }
  if (res.headerSent) {
    return next(error); // if sent, then forward next error which we wont send a response again.
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(database)
  .then(() => {
    //Connect to server
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        "\x1b[36m",
        `Connected both database and server
        Server is running on http://localhost:${process.env.PORT || 8000}/api/${
          process.env.DB_NAME
        }`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
