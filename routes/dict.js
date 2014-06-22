/**
 * Created by LENOVO on 15.06.2014.
 */
function readTopics(parentId) {
    var cons = '';
    var pg = require('pg');
    var params = { host: 'ec2-54-225-239-184.compute-1.amazonaws.com', port: '5432', user: 'dzwbxhpjsrzcri', password: 'B1_C7gHTzGm8qkzRX0wnU6tixR', database: 'd2vm1254u3rh9f', ssl: true };
    var client = new pg.Client(params);
    client.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        client.query('SELECT "Topics"."Topic_Id", "Topics"."ParentTopic_Id", "TopicNames"."TopicName", "Topics"."Topicdescription" FROM public."Topics", public."TopicNames" WHERE "Topics"."TopicName_Id" = "TopicNames"."TopicName_Id" AND "Topics"."ParentTopic_Id"=' + parentId.toString() + ';', function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            cons = result.rows[0].TopicName;
            //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
            client.end();
        });
    });
    return cons;
}
var pgQuery = require('libs/pgQuery');
//var async = require('async');

exports.dict = function (req, res, next) {
    var queryData = 1;
//    var myCallback = function(data) {
//        console.log('got data: '+data);
//    };
//    var usingItNow = function(callback) {
//        callback(console.log('got it!'));
//    };
//    usingItNow(myCallback);
//
//    async.waterfall([
//        function (callback) {
//            callback(null, pgQuery(queryData));
//        },
//        function (response, callback) {
//            //callback(null, res.render('pages/dict', { title: 'VT Dictionary', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ], data: response /*{ title: 'Vocabulary Tutor', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] /*+ cons */}));
//            callback(null, console.log(response)) ;
//        }
//    ]);
    //console.log(pgQuery(queryData));
    res.render('pages/dict', { title: 'VT Dictionary', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ], data: readTopics(1) /*{ title: 'Vocabulary Tutor', muppets: [ 'Kermit', 'Fozzie', 'Gonzo' ] /*+ cons */});
    //console. log(cons);
};

