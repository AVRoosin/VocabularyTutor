/*
 * GET home page.
 */

var cons = '';
var pg = require('pg');
var conString = "postgres://dzwbxhpjsrzcri:B1_C7gHTzGm8qkzRX0wnU6tixR@ec2-54-225-239-184.compute-1.amazonaws.com:5432/d2vm1254u3rh9f";
var client = new pg.Client(conString);
client.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT "PartOfSpeech_Name" FROM "PartsOfSpeech"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        cons = result.rows[0];
        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
        client.end();
    });
//    client.query('SELECT * FROM "PartsOfSpeech" AS "theParts"', function (err, result) {
//        if (err) {
//            cons = "error running query";
//        }
//        cons = result.rows[0].theParts;
//        alert(result);
//        client.end();
//    });
});


exports.index = function (req, res) {
    res.render('index', { title: 'Vocabulary Tutor' + cons });
};

