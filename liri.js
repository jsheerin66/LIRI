var twitterKeys = require("./keys.js");
console.log(twitterKeys)
var command = process.argv[2];
console.log(command)

if (command == "my-tweets") {
  console.log("my-tweets")
}
else if (command == "spotify-this-song"){
  console.log("spotify-this-song")
}
else if (command == "movie-this"){
  console.log("movie-this")
}
else if (command == "do-what-it-says"){
  console.log("do-what-it-says")
}