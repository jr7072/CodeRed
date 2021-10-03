var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require("cors");
var fs = require('fs');
var path = require('path');
require("dotenv").config({ path: "./config.env" });
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/incident"));
// get driver connection
const dbo = require("./db/conn");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "ejs");
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });
var imgModel = require('./src/Components/InsertNewFloorMap/imageLoadMode.js');
app.get('/', (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('You done fucked it', err);
    }
    else {
      res.render('imagesPage', { items: items});
    }
  });
});

app.post('/', upload.single('image'), (req, res, next) => {
  var obj = {
    name: req.body.name,
    description: req.body.description,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
  }
  imgModel.create(obj, (err,item) => {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect('/');
    }
  });
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});