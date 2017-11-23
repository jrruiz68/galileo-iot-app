
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



// http://192.168.0.XX:3000/caballo
app.get('/caballo', function (req, res) {
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

app.listen(3000, function () {
  console.log('Espero te ayude Julietita, ver el puerto 3000');
});
