const express = require("express");
const connectDB = require("./db/connect");
const route = require("./routes/tasks");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", route);

// start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
