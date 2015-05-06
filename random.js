/**
 * Created by brianaamodt on 5/6/15.
 */
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};



module.exports= randomNumber;