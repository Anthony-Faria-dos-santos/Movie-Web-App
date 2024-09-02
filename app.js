const express    = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('<b>Hello My World<b>!');
});

app.listen(3000,function () {
    console.log('Server started on port 3000');
})