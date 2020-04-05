const express = require('express');
const router = new express.Router();
const categoryController = require(`./../controllers/categoryController`);

router
    .route("/category/:id")
    .get(categoryController.getCategoryById)
    .delete(categoryController.deleteCategoryById)
    .patch(categoryController.updateCategory)

router
    .route("/category")
    .post(categoryController.createCategory)
    
router
    .route("/categories")
    .get(categoryController.getAllCategories)


router
    .route("/categoryPlaylist/:id")
    .patch(categoryController.addPlaylist)
    .delete(categoryController.removePlaylist)

module.exports = router;

