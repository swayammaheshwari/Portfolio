require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGOLAB_URI, {useNewUrlParser: true});

app.get("/",(req,res)=>{
    res.render("index");
})







app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
