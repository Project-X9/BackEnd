const Category = require(`./../models/category.js`);


//-------------------------------------------------------CREATE--------------------------------------------------------------------//

//Create a Category
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

//update a category
exports.updateCategory = async (req, res) => {
  try {
    const categ = await Category.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: {
        categ
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
    const Categories = await Category.find();
    res.status(200).json({
      status: "success",
      results: Categories.length,
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
    const categ=  await Category.findById(req.query.id);
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


//get category name  by id
exports.getCategoryNameById = async (req, res) => {
  try 
  {
    const category=  await Category.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        category_name: category.name
      }
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


//get category href  by id
exports.getCategoryHrefById = async (req, res) => {
  try 
  {
    const category=  await Category.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        category_href : category.href
      }
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

//get category icon  by id
exports.getCategoryIconById = async (req, res) => {
  try 
  {
    const category=  await Category.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        Category_icon: category.icon
      }
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
    await Category.findByIdAndDelete(req.query.id);
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

//delete all categories
exports.deleteAllCategory = async (req, res) => {
  try {
    await Category.deleteMany();
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