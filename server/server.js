const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(helmet());
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// const accessLogStream = fs.createWriteStream(
//   "access.log",
//   {
//     path: path.join(__dirname, "log"),
//   },
//   { flags: "a" }
// );

// app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan("dev"));
const port = process.env.PORT || 9000;

// enable files upload
// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// );

app.use(express.json({ limit: "2mb" }));
app.use(
  express.urlencoded({
    limit: "2mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


const playerRoutes = require("./routes/playerRoutes")

app.use("/", playerRoutes);
// app.use("/users", cors(), userRoutes);




// cron.schedule("* * * * *", () => {
// });

app.listen(port, async () => {
  console.log("MongoDB URL in use: " + process.env.ATLAS_URI);
  mongoose.connect(process.env.ATLAS_URI);
  mongoose.connection
    .once("open", () => console.log("connected to MongoDB!"))
    .on("error", (err) => console.error("connecting to MongoDB " + err));

  console.log("Express server listening on port " + port);
});

// post lt access token setup

// getAccessToken();
// cron.schedule("0,20,40 * * * *", () => {
//   getAccessToken();
// });
