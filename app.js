/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);
var engine=require('ejs-locals');

var app = express();
// all environments
app.set('port', process.env.PORT || config.get('port'));

app.engine('ejs', engine); // layout partial block
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

//libs & styles
//app.get('/public/css/style.css', function (req, res, next) {
//    res.sendfile('style.css');
//});
app.get('./public/vendor/bower_components/bootstrap/dist/js/bootstrap.min.js', function (req, res, next) {
    res.sendfile('style.css');
});
app.get('./public/vendor/bower_components/jquery/dist/jquery.min.js', function (req, res, next) {
    res.sendfile('jquery.js');
});
app.get('./public/vendor/bower_components/bootstrap/dist/css/bootstrap.min.css', function (req, res, next) {
    res.sendfile('bootstrap.min.css');
});
app.get('./public/vendor/bower_components/normalize.css/normalize.css', function (req, res, next) {
    res.sendfile('normalize.css');
});


http.createServer(app).listen(app.get('port'), function () {
    log.info('Express server listening on port ' + app.get('port'));
});
