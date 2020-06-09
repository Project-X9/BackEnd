const Track = require(`../models/track.js`);
const Album = require(`../models/album.js`);



exports.searchTracks = async (req, res)  => {

    if(req.query.q == "")
    {
      res.status(404).send({error : "Empty search query"});
    }
    else 
    {
      
      const sendTracks = await Track.find({name: {'$regex' : req.query.q , '$options' : 'i'} });
     if(sendTracks.length == 0){
         res.status(200).send({message: "No results found"});
         return;
     }    
      res.status(200).send({tracks: sendTracks});

    }
};



exports.searchAlbums = async (req, res)  => {

  if(req.query.q == "")
  {
    res.status(404).send({error : "Empty search query"});
  }
  else 
  {
    
    const sendAlbums = await Album.find({name: {'$regex' : req.query.q , '$options' : 'i'} });
   if(sendAlbums.length == 0){
       res.status(200).send({message: "No results found"});
       return;
   }    
    res.status(200).send({albums: sendAlbums});

  }
};


