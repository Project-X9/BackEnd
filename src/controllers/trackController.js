const Track = require(`./../models/track.js`);


exports.getTracks = async (req, res) => {
    try {
      const tracks = await Track.findById(req.params.id, "tracks");
      res.status(200).json({
        status: "success",
        data: {
          tracks
        }
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };


exports.getTrack = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        track
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

exports.deleteTrack = async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};
