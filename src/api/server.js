let express     = require('express');
let app         = express();
let bodyParser  = require('body-parser')
let cors        = require('cors');
let fs          = require("fs");
let argv        = require('yargs').argv;

app.use(bodyParser.json());
app.use(cors());

const HTTP_CODE = argv.CODE ? argv.CODE : 200;

function makeResponse(response) {
  app[response.method](response.url, (req, res) => {
    fs.readFile( __dirname + "/data/" + response.file, 'utf8', function (err, data) {
      data = response.fn ? response.fn( JSON.parse(data), req.body) : JSON.parse(data);
      res.statusCode = HTTP_CODE;
      res.header('Content-Type', 'application/json');
      res.end( JSON.stringify(data));
    });
  });
}

const server = app.listen(8081, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log("REST API Listening at http://%s:%s", host, port)
});

[
  {
    url     : '/sample',
    method  : 'post',
    file    : 'sampleData.json'
  }
].map(makeResponse);
