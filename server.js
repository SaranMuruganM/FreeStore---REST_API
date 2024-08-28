const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');
const { default: mongoose } = require("mongoose");
const app = express();
const cloudinary = require("cloudinary").v2;
const productsRoutes = require("./routers/productsRouter.js");
const userProductsRoutes = require("./routers/userProductsRouter.js");
const cors = require('cors');
require('dotenv').config();

// MiddleWares
app.use(cors());
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routers

app.use("/api/admin/products", productsRoutes);
app.use("/api/products", userProductsRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.get("/login", (req, res) => {
  res.send("Login");
});

//Cloudinary

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});




//Server Listener

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database Connected");
    app.listen(5100, () => {
      console.log("server is listening at port 5100");
    });
  })
  .catch((err) => {
    console.log(err);
  });
