
const express = require(`./config/express`);
const app = express();
let fs = require('fs');
let url = require('url');
let port = 3000 ;
let restaurants = require('./public/restaurants');


app.use(function(req, res, next) {
    console.log(req.method, req.url);
    console.log('Time:', Date.now());
    next();
});

app.get('/', function(req, res, next) {
    res.redirect("/spa.html");
    next();
});

app.get("/restaurants", (req, res, next) => {
    res.send(restaurants);
    next();
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))