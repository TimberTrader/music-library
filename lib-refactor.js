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
               },
    printPlayLists: function() {
        for (let pList in this.playlists) {
            let plName = this.playlists[pList].name
            let plTracks = this.playlists[pList].tracks.length
            console.log(`${pList}: ${plName} - ${plTracks} tracks`)
          }
    },
    printTracks: function () {
        for (let pTracks in this.tracks) {
          let plTitle = this.tracks[pTracks].name;
          let plArtist = this.tracks[pTracks].artist;
          let plAlbum = this.tracks[pTracks].album
          console.log(`${pTracks}: ${plTitle} by ${plArtist} (${plAlbum})`)
        }  
    },
    printTracks: function () {
        for (let pTracks in this.tracks) {
          let plTitle = this.tracks[pTracks].name;
          let plArtist = this.tracks[pTracks].artist;
          let plAlbum = this.tracks[pTracks].album
          console.log(`${pTracks}: ${plTitle} by ${plArtist} (${plAlbum})`)
        }
    },
    printPlayList: function () {
      let plName = this.playlists[playListId].name;
      let plTracks = this.playlists[playListId].tracks.length;
      console.log(`${playListId}: ${plName} - ${plTracks}`);
    
      let trIdS = this.playlists[playListId].tracks;
      for (trId of trIdS) {
          let plTitle = this.tracks[trId].name;
          let plArtist = this.tracks[trId].artist;
          let plAlbum = this.tracks[trId].album
          console.log(`${trId}: ${plTitle} by ${plArtist} (${plAlbum})`)
        }
    },
    addTrackToPlaylist: function () {
        let trToAdd = this.tracks[trackId].id;
        let plToAddTo = this.playlists[playlistId].tracks;
        plToAddTo.push(trToAdd);
      },
    addTrac: function () {
        let newID = uid();
        this.tracks[newID] = {
          id: newID,
          name: name,
          artist: artist,
          album: album
        }
        console.log(library.tracks)
       },
    addPlaylist: function () {
           let newID = "p03";
             library.playlists[newID] = {
             id: newID,
             name: name,
             tracks: ["t01", "t02", "t03"]
          }
          console.log(library.playlists)
        }

    }
    
var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  var printSearchResults = function(query) {
  
  }