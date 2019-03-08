let express = require("express");
let bodyParser = require("body-parser");

module.exports = function () {
    let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static('./public'));
    return app;
};