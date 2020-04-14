let weather = require('weather-js');
weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function (err, result) {
    if (err) console.log(err);
    console.log("A "+ result[0].location.name + ", il fait actuellement " + result[0].current.temperature + " degrés " + result[0].location.degreetype);
    console.log("Etat du ciel : " + result[0].current.skytext);
});