require('dotenv').config();
const express = require('express');
const app = express();

let PORT = process.env.PORT || 4000;

app.get('/', function(req, res) {
    res.send('<b>Hello My World!</b>');
});

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}`);
});