const Track = require(`../models/track.js`);
const Album = require(`../models/album.js`);



exports.searchTracks = async (req, res)  => {

    if(req.query.q == "")
    {
      res.status(404).send({error : "Empty search query"});
    }
    else 
    {
      if(!req.query.page){
      const sendTracks = await Track.find({name: {'$regex' : req.query.q , '$options' : 'i'} });
     if(sendTracks.length == 0){
         res.status(200).send({message: "No results found"});
         return;
     }    
      res.status(200).send({tracks: sendTracks});
    } else {
      const sendTracks = await Track.find({name: {'$regex' : req.query.q , '$options' : 'i'} }).skip(parseInt(req.query.limit)*parseInt(req.query.page) - 1).limit(parseInt(req.query.limit))
      if(sendTracks.length == 0){
        res.status(200).send({message: "No results found"});
        return;
    }    
     res.status(200).send({tracks: sendTracks});
    }
    }
};



exports.searchAlbums = async (req, res)  => {

  if(req.query.q == "")
  {
    res.status(404).send({error : "Empty search query"});
  }
  else 
  {
    if(!req.query.page){
      console.log("here")
    const sendAlbums = await Album.find({name: {'$regex' : req.query.q , '$options' : 'i'} });
   if(sendAlbums.length == 0){
       res.status(200).send({message: "No results found"});
       return;
   }    
    res.status(200).send({albums: sendAlbums});

  } else {
    
    const sendAlbums = await Album.find({name: {'$regex' : req.query.q , '$options' : 'i'} }).skip(parseInt(req.query.limit)*parseInt(req.query.page) - 1).limit(parseInt(req.query.limit));
   if(sendAlbums.length == 0){
       res.status(200).send({message: "No results found"});
       return;
   }    
    res.status(200).send({albums: sendAlbums});


  }

  }
};


