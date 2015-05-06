/**
 * Created by brianaamodt on 5/6/15.
 */
var express = require('express');
var app = express();
var combine = require('./combine');

app.set('port', (process.env.PORT || 5000));

app.get ('/', function(request, response){
    response.send(combine.currency());
});

app.listen(app.get('port'), function(){
    console.log('Node app running on port: ', app.get('port'));
});