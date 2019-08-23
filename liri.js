require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var action = process.argv[2];
var parameter = process.argv.slice(3).join(" ");




function switchCase() {

  switch (action) {

    case 'concert':
      bandsInTown(parameter);                   
      break;                          

    case 'spotify':
      spotSong(parameter);
      break;

    case 'movie':
      movieInfo(parameter);
      break;

    case 'do-what-it-says':
      getRandom();
      break;

      default:                            
      logIt("Invalid Instruction");
      break;

  }
};

