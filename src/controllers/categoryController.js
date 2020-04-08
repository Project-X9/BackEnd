const Category = require(`./../models/category.js`);

//-------------------------------------------------------CREATE--------------------------------------------------------------------//

//Create a Category
exports.createCategory = async (req, res) => {
  console.log("hehreeeee")
  try {
    const newcategory = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        Category: newcategory
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message
    });
  }
};

//-------------------------------------------------------UPDATE--------------------------------------------------------------------//

//update a category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        category
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

//-------------------------------------------------------GET--------------------------------------------------------------------//

//getAllCategories
exports.getAllCategories = async (req, res) => {
  try 
  {
    const Categories = await Category.find().populate({path: "playlists"});
    console.log(Categories);
    res.status(200).json({
      status: "success",
      data: {Categories}
    });
  } catch (err)
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};


//get category by id
exports.getCategoryById = async (req, res) => {
  try 
  {
    const categ=  await Category.findById(req.params.id).populate({path: 'playlists'});
    res.status(200).json({
      status: "success",
      data: {categ}
    });
  } catch (err)
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};


//-------------------------------------------------------DELETE--------------------------------------------------------------------//
//delete category by id
exports.deleteCategoryById = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
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

//--------------------------------------------add/remove playlist---------------------------------------------------------//

  /*add playlist*/
   exports.addPlaylist = async (req, res) => {
    try {
      const IN_Category= await Category.findById(req.params.id);
       var count =0;
       for(var i = 0; i < IN_Category.playlists.length; i++){
         if( req.body.id1 === IN_Category.playlists[i]){ count++; } }

      if(count!==0){ return res.status(403).json({ data : "already exists"})}
      
      await Category.findByIdAndUpdate(req.params.id,{ $push:{playlists: req.body.id1} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

  /*remove playlist*/
  exports.removePlaylist = async (req, res) => {
    try { 
      const IN_Category= await Category.findById(req.params.id);
      var count =0;
      for(var i = 0; i < IN_Category.playlists.length; i++){if( req.body.id1 === IN_Category.playlists[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }
      
      await Category.findByIdAndUpdate(req.params.id,{ $pull:{playlists: req.body.id1} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };
