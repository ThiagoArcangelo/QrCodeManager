require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const userRoutes = require("./routes/userRoutes");
const publicRoutes = require("./routes/publicRoutes");
const paramsRoutes = require("./routes/projectsRoutes");
const Client = require("./routes/clientRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3333;

// Models
const User = require("./models/User");
const Projects = require("./models/Projects");

app.use(userRoutes);
app.use(publicRoutes);
app.use(paramsRoutes);
// app.use(clientRoutes);

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
