const express = require( 'express' );

// create express application
const app = express();



// listen on a port
const port = process.env.PORT || 8080;
app.listen( port, () => {
    console.log( `Server started on port ${ port }.` );
} );