var express = require('express');
var consola = require('consola')
var app = express();
var port = 3000;
// * Make libs and assets public
app.use("/public", express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendfile(__dirname + '/index.html')
})

app.listen(port, () => {
    consola.success("Server running");
})