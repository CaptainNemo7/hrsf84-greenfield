var express = require ('express')
var app = express();
var unsplash = require('../helpers/unsplash.js');

var port = process.env.PORT || 8080;
app.listen(port, () => {console.log ('listening to port: ', port)})

// app.use(function (req, res) {
//   res.status(200).send('Hello Earth - Welcome To the Web')
// })
app.use(express.static('./client/dist'))


app.get('/photos', function(req, res){

  console.log('REQ QUERY', req.query);
  unsplash.getPhotos('tigers', function(err, data){
    if(err){
      res.status(404).send('ERROR RETRIEVING PHOTOS');
    }
    // console.log(data[0].urls.full);
    res.send(data[1].urls.full);

  });

});
