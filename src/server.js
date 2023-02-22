require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Routes
const indexRoutes = require("./routes/index");

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization", "x-password"],
//   })
// );
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const port = process.env.PORT || 3333;

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
