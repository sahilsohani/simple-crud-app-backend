const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());

//route
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
    res.send('Hello World')
})


mongoose.connect("mongodb+srv://sahilsohani16:rVG6oPTkez4cWGWL@cluster0.y9xqn00.mongodb.net/simple-crud-app?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected!');
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch (() => {
    console.log("connection failed");
});



//rVG6oPTkez4cWGWL
//mongodb+srv://sahilsohani16:rVG6oPTkez4cWGWL@cluster0.y9xqn00.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0