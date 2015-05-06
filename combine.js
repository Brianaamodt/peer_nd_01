/**
 * Created by brianaamodt on 5/6/15.
 */
var randomNumber = require('./random');
var money = require('./usd');


var cash = function(){
    var finance = randomNumber(1,1000000);
    return money(finance);
};

var currency = function(){
    return "Account balance:<br>" + cash();
};

module.exports.cash = cash;
module.exports.currency = currency;