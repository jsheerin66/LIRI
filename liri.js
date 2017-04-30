var twitterKeys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var omdb = require('omdb');
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
    if (query == undefined){
      query = "The Sign"
    }
    pullSpotify(query)
} else if (command == "movie-this") {
    console.log("movie-this")
    pullOMDB(query)
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
          console.log("==========================================")
            for (var j = 0; j < data.tracks.items[i].artists.length; j++) {
                console.log("featured artist: " + data.tracks.items[i].artists[j].name)
            }

            console.log("track name: " + data.tracks.items[i].name)

            if (data.tracks.items[i].preview_url == null) {
                console.log("URL NOT FOUND BRAHH!!!")
            } else {
                console.log("url BRAHH!!!: " + data.tracks.items[i].preview_url)
            }

            console.log("album name: " + data.tracks.items[i].album.name)
        }

        // lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
    });
}

function pullOMDB(title) {
    console.log(title)
    omdb.search(title, function(err, movies) {
        if (err) {
            return console.error(err);
        }

        if (movies.length < 1) {
            return console.log('No movies were found!');
        }

        movies.forEach(function(movie) {
            console.log(movie)
            console.log('%s (%d)', movie.title, movie.year);
        });

        // Saw (2004)
        // Saw II (2005)
        // Saw III (2006)
        // Saw IV (2007)
        // ...
    });

    // omdb.get({
    //     title: 'Saw',
    //     year: 2004
    // }, true, function(err, movie) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //
    //     if (!movie) {
    //         return console.log('Movie not found!');
    //     }
    //
    //     console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    //     console.log(movie.plot);
    //
    //     // Saw (2004) 7.6/10
    //     // Two men wake up at opposite sides of a dirty, disused bathroom, chained
    //     // by their ankles to pipes. Between them lies...
    // });

}
