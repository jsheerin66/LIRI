var twitterKeys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
});

var params = {
    screen_name: 'JustinSheerin'
};
// pullTweets()


// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log("line 15 " + tweets);
//   }
// });



console.log("twitterKeysis ")
console.log(twitterKeys)
console.log(twitterKeys.consumer_secret)
console.log(twitterKeys.consumer_key)
console.log(twitterKeys.access_token_key)
console.log(twitterKeys.access_token_secret)
var command = process.argv[2];
var query = process.argv[3];
console.log(query)
console.log("commandIs " + command)

if (command == "my-tweets") {
    console.log("my-tweets")
    pullTweets()
} else if (command == "spotify-this-song") {
    console.log("spotify-this-song")
    pullSpotify(query)
} else if (command == "movie-this") {
    console.log("movie-this")
} else if (command == "do-what-it-says") {
    console.log("do-what-it-says")
}
//functions

function pullTweets() {
    console.log("thisIsPullTweets")
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("thisIsTweets");
            // console.log(tweets[0]);
            // console.log(tweets[0].text);
            // console.log(response);
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text)
            }
        }
    });

}

function pullSpotify(song) {
    console.log(song)
    spotify.search({
        type: 'track',
        query: song
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        // console.log(data)
        // console.log(data.tracks)

        for (i = 0; i < data.tracks.items.length; i++) {
            console.log(data.tracks.items[i].name)
        }
        // Do something with 'data'
    });
}

function pullRequest() {
    console.log(pullRequest)

}
