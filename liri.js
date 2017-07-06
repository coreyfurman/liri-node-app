console.log("The bot is starting up");

var TW = require("twitter");

const keys = require('./keys.js');
console.log(k);
var T = new Twitter(keys);

switch (input) {

	case "my-tweets":
	twitterFunc();
	break;

	case "movie-this":
	movieFunc( requestID );
	break;
}


function twitterFunction() {

const tKey = keys.twitterKeys;

var T = new Twitter(keys);

var params = {screen_name: '@forClass100'}; 

client.get('statuses/user_timeline', { params, count: 20 }, function(error, tweets, response) {
	for (var i = 0; i < tweets.length && i < 20; i++) {
		console.log(tweets[i].text);
	}
   
   fs.appendFile("random.txt", tweets, function(err) {
    				if (err) {
      				return console.log(err);
				    }
				  });
    if (error) {
    	console.log("Error occured: " + error);
    	return;
    }

});