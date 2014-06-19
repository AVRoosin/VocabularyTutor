/**
 * Created by LENOVO on 15.06.2014.
 */
var client = require('libs/pg');
function readTopics(parentId) {
    var cons = '';
    client.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        client.query('SELECT "Topics"."Topic_Id", "Topics"."ParentTopic_Id", "TopicNames"."TopicName", "Topics"."Topicdescription" FROM public."Topics", public."TopicNames" WHERE "Topics"."TopicName_Id" = "TopicNames"."TopicName_Id" AND "Topics"."ParentTopic_Id"='+parentId.toString()+';', function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            console.log(result.rows);
            client.end();

        });
    });
}
module.exports=readTopics;