/*
 * GET home page.
 */

//var cons = '';
//var pg = require('pg');
//var params = { host: 'ec2-54-225-239-184.compute-1.amazonaws.com', port: '5432', user: 'dzwbxhpjsrzcri', password: 'B1_C7gHTzGm8qkzRX0wnU6tixR', database: 'd2vm1254u3rh9f', ssl: true };
//var client = new pg.Client(params);
//client.connect(function (err) {
//    if (err) {
//        return console.error('could not connect to postgres', err);
//    }
//    client.query('SELECT NOW() AS "theTime"', function (err, result) {
//        if (err) {
//            return console.error('error running query', err);
//        }
//        cons = result.rows[0].theTime;
//        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//        client.end();
//    });
////    client.query('SELECT * FROM "PartsOfSpeech" AS "theParts"', function (err, result) {
////        if (err) {
////            cons = "error running query";
////        }
////        cons = result.rows[0].PartOfSpeech_Name;
////        console.log(result.rows[0].PartOfSpeech_Name);
////        client.end();
////    });
//});


exports.index = function (req, res, next) {
    res.render('pages/index', { title: 'Vocabulary Tutor', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] /*{ title: 'Vocabulary Tutor', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] /*+ cons */});
    //console. log(cons);
};

