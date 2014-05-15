/**
 * Created by LENOVO on 15.05.2014.
 */
var nconf = require('nconf');
var path = require('path');
nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')});
module.exports = nconf;