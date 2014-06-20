/**
 * Created by LENOVO on 15.06.2014.
 */
var client = require('libs/pg');
//var io = require('socket.io').listen(8888);
//
//io.sockets.on('connection', function (socket) {
//    socket.on('sql', function (data) {
//        var query = client.query(data.sql, data.values);
//        query.on('row', function(row) {
//            socket.emit('sql', row);
//        });
//    });
//});
function readTopics(parentId) {
    var cons = '';
    var queryResponse = (function () {
        var value = '';
        return{
            getResponse:function(){
                //client.connect(function(err))
            },
            getValue: function () {
                return value;
            }
        }
    }());
    client.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        var query = client.query('SELECT "Topics"."Topic_Id", "Topics"."ParentTopic_Id", "TopicNames"."TopicName", "Topics"."Topicdescription" FROM public."Topics", public."TopicNames" WHERE "Topics"."TopicName_Id" = "TopicNames"."TopicName_Id" AND "Topics"."ParentTopic_Id"=' + parentId.toString() + ';'
            , function (err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                cons = result.rows;
                console.log(cons);
                client.end();
            }
        );
//        query.on('row', function (row) {
//            cons += row;
//            console.log("Cons are "+cons);
//        });
        console.log("Cons are "+cons);
    });
    //console.log("Cons are "+cons);
    return cons;
}
module.exports = readTopics;