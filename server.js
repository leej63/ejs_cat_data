const express = require("express");
const app = express();

app.use(express.static(__dirname + '/static'));

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.get('/cats', (request, response) => {
    response.render("cats");
})

app.get('/prince', (request, response) => {
    var details = {
        name : 'Prince',
        fav_food : 'Salmon',
        age : 7,
        sleeping_spots : ['in a box', 'on the couch'],
        pic : 'garfield.jpg',
    }
    response.render("details", {kitty: details});
})

app.get('/matcha', (request, response) => {
    var details = {
        name : 'Matcha',
        fav_food : 'Spaghetti',
        age : 6,
        sleeping_spots : ['on a keyboard'],
        pic : 'ragdoll.jpg',
    }
    response.render("details", {kitty: details});
})

app.get('/sabrina', (request, response) => {
    var details = {
        name : 'Sabrina',
        fav_food : 'Meatballs',
        age : 3,
        sleeping_spots : ['in the litter box', 'in small boxes'],
        pic : 'scottishfold.jpg',
    }
    response.render("details", {kitty: details});
})

app.get('/lucifer', (request, response) => {
    var details = {
        name : 'Lucifer',
        fav_food : 'Sushi',
        age : 4,
        sleeping_spots : ['on the trash can', 'in any sort of box', 'on the bed'],
        pic : 'kitten.jpg',
    }
    response.render("details", {kitty: details});
})

app.listen(8000, () => console.log("listening on port 8000"));

