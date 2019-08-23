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

//Concert search
function bandsInTown(parameter){

    if (action === 'concert')
    {
        var artisName="";
        for (var i = 3; i < process.argv.length; i++)
        {
            artisName+=process.argv[i];
        }
        console.log(artisName);
    }
    else
    {
        artisName = parameter;
    }
    
    
    
    var queryUrl = "https://rest.bandsintown.com/artists/"+artisName+"/events?app_id=codingbootcamp";
    
    
    request(queryUrl, function(error, response, body) {
    
      if (!error && response.statusCode === 200) {
    
        var JS = JSON.parse(body);
        for (i = 0; i < JS.length; i++)
        {
          var dTime = JS[i].datetime;
            var month = dTime.substring(5,7);
            var year = dTime.substring(0,4);
            var day = dTime.substring(8,10);
            var dateForm = month + "/" + day + "/" + year
      
          logIt("\n---------------------- "+artisName+" -----------------------------\n");
    
            
          logIt("Date: " + dateForm);
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

    //log info to log.txt
    function logIt(dataToLog) {

        console.log(dataToLog);
    
        fs.appendFile('log.txt', dataToLog + '\n', function(err) {
            
            if (err) return logIt('Error logging data to file: ' + err);	
        });
    }
    switchCase();

