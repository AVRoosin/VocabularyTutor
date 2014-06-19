/**
 * Created by LENOVO on 19.06.2014.
 */
var pg = require('pg');
var params = { host: 'ec2-54-225-239-184.compute-1.amazonaws.com', port: '5432', user: 'dzwbxhpjsrzcri', password: 'B1_C7gHTzGm8qkzRX0wnU6tixR', database: 'd2vm1254u3rh9f', ssl: true };
var client = new pg.Client(params);
module.exports = client;