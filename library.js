var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function printPlayLists() {
      for (let pList in library.playlists) {
        let plName = library.playlists[pList].name
        let plTracks = library.playlists[pList].tracks.length
        console.log(`${pList}: ${plName} - ${plTracks} tracks`)
      }
     }
   //  printPlayLists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
    for (let pTracks in library.tracks) {
      let plTitle = library.tracks[pTracks].name;
      let plArtist = library.tracks[pTracks].artist;
      let plAlbum = library.tracks[pTracks].album
      console.log(`${pTracks}: ${plTitle} by ${plArtist} (${plAlbum})`)
    }
}
// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlayList = function (playListId) {
  
  let plName = library.playlists[playListId].name;
  let plTracks = library.playlists[playListId].tracks.length;
  console.log(`${playListId}: ${plName} - ${plTracks}`);

  let trIdS = library.playlists[playListId].tracks;
  for (trId of trIdS) {
    let plTitle = library.tracks[trId].name;
    let plArtist = library.tracks[trId].artist;
    let plAlbum = library.tracks[trId].album
    console.log(`${trId}: ${plTitle} by ${plArtist} (${plAlbum})`)
  }
}

// printPlayList("p02")


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  let trToAdd = library.tracks[trackId].id;
  let plToAddTo = library.playlists[playlistId].tracks;
  plToAddTo.push(trToAdd);
}

// addTrackToPlaylist("t02", "p02");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// console.log(uid())

// adds a track to the library

var addTrack = function (name, artist, album) {
 let newID = uid();
 library.tracks[newID] = {
   id: newID,
   name: name,
   artist: artist,
   album: album
 }
 console.log(library.tracks)
}
// addTrack("TrackDaniels", "theDudes", "Good Hunting")


// adds a playlist to the library

var addPlaylist = function (name) {
  let newID = "p03";
    library.playlists[newID] = {
    id: newID,
    name: name,
    tracks: ["t01", "t02", "t03"]
 }
 console.log(library.playlists)
    
}
addPlaylist("all the songs")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}