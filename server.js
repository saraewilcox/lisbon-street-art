const express = require( 'express' );

// create express application
const app = express();

app.get('/', function (req, res) {
  res.render('index', {});
});

// listen on a port
const port = process.env.PORT || 3001;
app.listen( port, () => {
    console.log( `Server started on port ${ port }.` );
} );