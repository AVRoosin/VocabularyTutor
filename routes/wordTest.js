/**
 * Created by LENOVO on 20.06.2014.
 */
//var pg = require('pg');
//var params = { host: 'ec2-54-225-239-184.compute-1.amazonaws.com', port: '5432', user: 'dzwbxhpjsrzcri', password: 'B1_C7gHTzGm8qkzRX0wnU6tixR', database: 'd2vm1254u3rh9f', ssl: true };
//var client = new pg.Client(params);
//client.connect();
//
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
exports.test = function (req, res, next) {
    res.render('pages/wordTest', { title: 'VT Test',pageInfo:"Приготовьтесь к тестированию!", data: [ 'Kermit', 'Fozzie', 'Gonzo' ]});
};