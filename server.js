const express = require("express");
const path    = require("path");
const app     = express();
const routes  = require("./routes/api");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');


app.use(cookieParser());
app.use(session(
    {
        secret: "Shh, its a secret!",   
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }
));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/animal');
}

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));

app.use(routes);

app.listen(3000, (req, res) => {
    console.log("running at port 3000");
});