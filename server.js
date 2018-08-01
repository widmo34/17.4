var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/assets', 'index.html'));
});

app.get('/userform', function(req, res){
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.send(JSON.stringify(response));
})

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;
  
    app.use(express.static('assets'));
  
    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port )
});
