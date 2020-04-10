const Category = require(`./../models/category.js`);

//-------------------------------------------------------CREATE--------------------------------------------------------------------//

/**
   * @property {Function} createCategory  create a category
   * @param {object} req - request object
   * @param {string} req.body.name  -category name
   * @param {string} req.body.icon  -category icon    (optional)
   * @param {string} req.body.href  -category href    (optional)
   * @param {object} res - response object
   * @param {string} res.body.id    -category id
   * @param {string} res.body.name  -category name
   * @param {string} res.body.icon  -category icon    
   * @param {string} res.body.href  -category href  
   * @param {string[]} res.body.playlists  -category playlist array  
*/
exports.createCategory = async (req, res) => {
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

/**
   * @property {Function} updateCategory  update a category
   * @param {object} req - request object
   * @param {string} req.params.id  -category id
   * @param {string} req.body.name  -category name    (optional)
   * @param {string} req.body.icon  -category icon    (optional)
   * @param {string} req.body.href  -category href    (optional)
   * @param {object} res - response object
   * @param {string} res.body.id    - updated category id
   * @param {string} res.body.name  - updated category name
   * @param {string} res.body.icon  - updated category icon    
   * @param {string} res.body.href  - updated category href  
   * @param {string[]} res.body.playlists  - updated category playlist array  
*/
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

/**
   * @property {Function} getAllCategories  get all categories
   * @param {object} res - response object
   * @param {object[]} res.body.Categories  - categories list
*/
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


/**
   * @property {Function} getCategoryById  get a category by id
   * @param {object} req - request object
   * @param {string} req.params.id  -category id
   * @param {object} res - response object
   * @param {string} res.body.id    -  category id
   * @param {string} res.body.name  -  category name
   * @param {string} res.body.icon  -  category icon    
   * @param {string} res.body.href  -  category href  
   * @param {string[]} res.body.playlists  -  category playlist array 
*/
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
/**
   * @property {Function} deleteCategoryById  delete a category by id
   * @param {object} req - request object
   * @param {string} req.params.id  -category id
*/
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

  /**
   * @property {Function} addPlaylist  add a playlist to a category
   * @param {object} req - request object
   * @param {string} req.body.id    -category id
   * @param {string} req.params.id  -playlist id
*/
   exports.addPlaylist = async (req, res) => {
    try {
      const IN_Category= await Category.findById(req.body.id);
       var count =0;
       for(var i = 0; i < IN_Category.playlists.length; i++){
         if( req.params.id === IN_Category.playlists[i]){ count++; } }

      if(count!==0){ return res.status(403).json({ data : "already exists"})}
      
      await Category.findByIdAndUpdate(req.body.id,{ $push:{playlists: req.params.id} });
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

  /**
   * @property {Function} removePlaylist  remove a playlist from a category
   * @param {object} req - request object
   * @param {string} req.body.id    -category id
   * @param {string} req.params.id  -playlist id
*/
  exports.removePlaylist = async (req, res) => {
    try { 
      const IN_Category= await Category.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_Category.playlists.length; i++){if( req.params.id === IN_Category.playlists[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }
      
      await Category.findByIdAndUpdate(req.body.id,{ $pull:{playlists: req.params.id} });
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
