require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const moment = require('moment');

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

//Concert search
function bandsInTown(parameter){

   
        var artisName="";
        for (var i = 3; i < process.argv.length; i++)
        {
            artisName+=process.argv[i];
        }
        console.log(artisName);
    
    
    
    
    var queryUrl = "https://rest.bandsintown.com/artists/"+artisName+"/events?app_id=codingbootcamp";
    
    
    request(queryUrl, function(error, response, body) {
    
      if (!error && response.statusCode === 200) {
    
        var JS = JSON.parse(body);
        for (i = 0; i < 5; i++)
        {
          var concertDate = moment(JS[i].datetime).format("MM/DD/YYYY hh:00 A");


          logIt("\n---------------------- "+artisName+" -----------------------------\n");
    
            
          logIt("Date: " + concertDate);
          logIt("Name: " + JS[i].venue.name);
          logIt("City: " + JS[i].venue.city);
          if (JS[i].venue.region !== "")
          {
            logIt("Country: " + JS[i].venue.region);
          }
          logIt("Country: " + JS[i].venue.country);
          logIt("\n---------------------------------------------------\n");
    
        }
      }
    });
    }

    //Spotify

    function spotSong(parameter) {


        var searchTrack;
        if (parameter === undefined) {
          searchTrack = "Disenchanted";
        } else {
          searchTrack = parameter;
        }
      
        spotify.search({
          type: 'track',
          query: searchTrack
        }, function(error, data) {
          if (error) {
            logIt('Error occurred: ' + error);
            return;
          } else {
            let spotifyArr = data.tracks.items;
    
            for (i = 0; i < 5; i++) {
                logIt("\n-----------------------"+searchTrack+"----------------------------\n");
                logIt("Artist: " + data.tracks.items[i].artists[0].name);
                logIt("Song: " + data.tracks.items[i].name);
                logIt("Link: " + data.tracks.items[i].external_urls.spotify);
                logIt("Album: " + data.tracks.items[i].album.name);
                logIt("\n---------------------------------------------------\n");
            
                }
            }
        }
        );
    }

    //log info to log.txt
    function logIt(dataToLog) {

        console.log(dataToLog);
    
        fs.appendFile('log.txt', dataToLog + '\n', function(err) {
            
            if (err) return logIt('Error logging data to file: ' + err);	
        });
    }
    switchCase();

