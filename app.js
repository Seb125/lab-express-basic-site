const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));


// our first Route:
// ...
// our first Route:





app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

// cat route:
app.get('/about', (request, response, next) => {


    response.sendFile(__dirname + '/views/about.html')


});


 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));