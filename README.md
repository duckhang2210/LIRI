# LIRI
LIRI is an app which is instead of saying "hey SIRI,...", and sometimes it gives you a wrong result because SIRI misheard what you said, now with LIRI that won't never happen again.

With LIRI, you can do 3 interesting things:
  - Give LIRI a name of the song and LIRI will gives you information about that song
  - Give LIRI a name of a singer or a band and you will receive info about their upcoming shows
  - Give LIRI a name of a movie and all the info about that movie will be given.

##### Spotify-this-song
node liri.js *spotify-this-song* *song-name*
![command line](/images/spotify.PNG)
User will input the command line *spotify-this-song* and then the name of the song they want to search. Liri returns
  - Name of the artist
  - Song's name
  - Preview link from Spotify
  - Name of the album
![result](/images/spotify-result.PNG)

##### movie-this
node liri.js *movie-this* *movie-name*
![command line](/images/movie-this.PNG)
User will input the command line *movie-this* and then the name of the movie they want to search. Liri returns
  - Title
  - Release year
  - IMDB Rating
  - Rotten Tomatoes Rating
  - Country
  - Language
  - Plot
  - Actors
![command line](/images/movie-this-result.PNG)
  
##### Concert-this
node liri.js *concert-this* *artist/band*
![command line](/images/concert-this.PNG)
User will input the command line *concert-this* and then the name of the artist/band they want to search. Liri returns
  - Date and time
  - Name of the venue
  - City
  - Country
![result](/images/concert-result.PNG)
##### Do-what-it-say
node liri.js *do-what-it-say*
Liri will return whatever the random.txt say it to do.
![random file](/images/random.PNG)
![result](/images/do-what.PNG)
