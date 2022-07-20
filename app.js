const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/");

const itemSchema = {
    name: String
}

const Item = mongoose.model("Item", itemSchema);

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
    Item.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('list', { day: day, items: items });
        }
    })
})

app.post('/', (req, res) => {
    const itemName = req.body.toDo;
    const item = new Item({
        name: itemName
    })
    item.save();
    res.redirect('/');
})

app.post("/removeItem", (req, res) => {
    console.log("response received ");
    console.log(req.body.checkbox);
    res.redirect('/');
})
app.listen(3000, () => {
    console.log("listening to port 3000");
})