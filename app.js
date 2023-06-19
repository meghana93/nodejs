const express = require('express'),
    bodyParser = require('body-parser'),
    // In order to use PUT HTTP verb to edit item
    methodOverride = require('method-override'),
    // Mitigate XSS using sanitizer
    sanitizer = require('sanitizer'),
    app = express(),
    port = 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
// https: //github.com/expressjs/method-override#custom-logic
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method;
        delete req.body._method;
        return method
    }
}));

let name = "Github Docker Jenkins Integration";

console.log(name);
    /* Redirects to the to do list if the page requested is not found */
    .use(function (req, res, next) {
        res.redirect('/todo');
    })

    .listen(port, function () {
        // Logging to console
        console.log(`Todolist running on http://0.0.0.0:${port}`)
    });
// Export app
module.exports = app;
