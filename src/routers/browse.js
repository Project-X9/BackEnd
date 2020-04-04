const express = require('express');
const router = new express.Router();
const categoryController = require(`./../controllers/categoryController`);


router
    .route("/category")
    .post(categoryController.createCategory)
    .delete(categoryController.deleteCategoryById)
    .patch(categoryController.updateCategory)
    .get(categoryController.getCategoryById)
    

router
    .route("/categories")
    .get(categoryController.getAllCategories)


router
    .route("/categoryPlaylist")
    .post(categoryController.addPlaylist)
    .delete(categoryController.removePlaylist)

module.exports = router;

