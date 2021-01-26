const express = require( 'express' );

// create express application
const app = express();

app.get('/', function (req, res) {
  res.render('./routes/index.js', {});
});

// listen on a port
const port = process.env.PORT || 8080;
app.listen( port, () => {
    console.log( `Server started on port ${ port }.` );
} );