
/////////////Dependences Server///////////////
var express = require("express"),
    app = express(),
    cp = require("child_process"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    path = require('path'),
    fs = require("fs"),
    os = require("os");


    var urlencodedParser = bodyParser.urlencoded({extended: false});
    app.use(cors());


    app.use(express.static('public'));

app.get('/', function (req, res) {
      res.send('Hello Sódel!');
});



// http://192.168.0.XX:3000/cabeza
app.post('/cabeza', function (req, res) {
 console.log('>>>> Cabeza <<<<');
  var comando = "mpg123 Sonidos/biomedica/Normal-heart-sounds60bpm.mp3";
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});


// http://192.168.0.XX:3000/cabeza
app.post('/corazon', function (req, res) {
 console.log('>>>> Corazon <<<<');
  var comando = "mpg123 Sonidos/biomedica/Normal-heart-sounds60bpm.mp3";
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});

app.listen(8080, function () {
  console.log('Server is running on >>> 8080 <<<');
});
