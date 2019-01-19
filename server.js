require('colors');
const path = require('path');
const express = require('express');

const peopleBlob = require(path.join(__dirname, 'data/people.json'));
const people = peopleBlob['people'];

const app = express();
app.get('/api/people/:id', getPersonById);
app.get('/api/people', getAllPeople);
app.get('/home', function(request, response){
    response.sendfile(path.resolve('./home/index.html')); 
}) 
app.get('/style.css', function(request, response){
    response.sendfile(path.resolve('./home/style.css'));
})
app.get('/index.js', function(request, response){
    response.sendfile(path.resolve('./home/index.js'));
})
//what does app.get do/documentation, need it to return an HTML file
//need to return HTML/CSS file as well as js file for client
// 1 create page layout;
// 2 call api/people to get list of all people and build left side list of names with onload
// 3 js onclicks for names which populate details on right side (re-render?)

const HTTP_PORT = 8080;
app.listen(HTTP_PORT, function (err) {
    if (err) {
        throw err;
    }

    console.log(('HTTP server listening on port ' + HTTP_PORT).green);
    console.log('People data:'.bold + ' http://localhost:' + HTTP_PORT + '/api/people');
});

function getPersonById(req, res) {
    const id = parseInt(req.params.id, 10);
    const filtered = people.filter(function (person) {
        return person.id === id;
    });

    if (filtered.length === 0) {
        res.sendStatus(404);
    } else {
        res.json({
            person: filtered[0]
        });
    }
}

function getAllPeople(req, res) {
    res.json(peopleBlob);
}