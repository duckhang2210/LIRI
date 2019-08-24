# LIRI
LIRI is an app which is instead of saying "hey SIRI,...", and sometimes it gives you a wrong result because SIRI misheard what you said, now with LIRI that won't never happen again.

With LIRI, you can do 3 interesting things:
  - Give LIRI a name of the song and LIRI will gives you information about that song
  - Give LIRI a name of a singer or a band and you will receive info about their upcoming shows
  - Give LIRI a name of a movie and all the info about that movie will be given.
### How to use

##### Spotify-this-song
node liri.js *spotify-this-song* *song-name*
User will input the command line *spotify-this-song* and then the name of the song they want to search. Liri returns
  - Name of the artist
  - Song's name
  - Preview link from Spotify
  - Name of the album

##### movie-this
node liri.js *movie-this* *movie-name*
User will input the command line *movie-this* and then the name of the movie they want to search. Liri returns
  - Title
  - Release year
  - IMDB Rating
  - Rotten Tomatoes Rating
  - Country
  - Language
  - Plot
  - Actors
  
##### Concert-this
node liri.js *concert-this* *artist/band*
![command line](/images/concert-this.PNG)
User will input the command line *concert-this* and then the name of the artist/band they want to search. Liri returns
  - Date and time
  - Name of the venue
  - City
  - Country
##### Do-what-it-say
node liri.js *do-what-it-say*
Liri will return whatever the random.txt say it to do.
