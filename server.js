
// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

    // set ejs as view engine
    app.set('view engine', 'ejs');
    // serve js & css files
    app.use("/static", express.static("public"));
    // body parser config to accept our datatypes
    app.use(bodyParser.urlencoded({ extended: true }));

    var listOfStudents = [ 'emily', 'annie', 'meredith', 'vince', 'eric', 'jorge',
                      'noel', 'brendan' ];


    app.get('/', function(req,res) {
      res.render('index', { students: listOfStudents })
    });

    app.post('/', function(req, res) {
      console.log(req.body);
      listOfStudents.push(req.body.name);
      //res.render('index', { students: listOfStudents} );
      // return json to the client
      console.log('sending list of students to client');
      console.log('list of students is:');
      console.log(listOfStudents);


      res.json(listOfStudents);
    })

    app.get('/hi', function(req,res) {
      res.send('hi');
    });


    app.get('/api/students', function(req,res) {
      res.json( students );
    });



    app.listen(3000, function (){
      console.log("listening on port 3000");
    });
