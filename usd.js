/**
 * Created by brianaamodt on 5/6/15.
 */
var money = function(x) {
    return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +".00";
};

//var money = function (x){
//    return "$" + x + ".00"
//}

//money(balance);

module.exports = money;