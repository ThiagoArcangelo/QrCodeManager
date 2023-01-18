require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Routes
const indexRoutes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3333;

// Models
const User = require("./models/User");
const Projects = require("./models/Projects");

app.use(indexRoutes);

// Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@qrcode.rsgma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(
    app.listen(port, () => {
      console.log(`Conectado na porta ${port}`);
    })
  )
  .catch((error) => console.log(error));
