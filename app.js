const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

let items = [];

mongoose.connect("mongodb://localhost:27017/");

const itemSchema = {
    name: String
}

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: 'Pen'
});

Item.insertMany(item1, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfully saved");
    }
})

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    let today = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-Us", option);
    res.render('list', { day: day, items: items });
})

app.post('/', (req, res) => {
    item = req.body.toDo;
    items.push(item);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log("listening to port 3000");
})