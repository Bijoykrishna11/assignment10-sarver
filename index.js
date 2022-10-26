const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const books = require('./data/Catagories.json');


app.get("/", (req, res) => {
    res.send(books);
})

app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    res.send(books.find(element => element.id == id));
})


app.listen(port, () => {
    console.log('Example app listening on port', port);
})