const express = require('express');
const router = express.Router();

//controllers
const articleController = require('app/http/controllers/articleController');

//routes
router.get('/myarticle',articleController.getMyArticle)
router.get('/',articleController.getNewArticle)
router.post('/', articleController.postArticle);
router.post('/ckeditor', articleController.postCkeditor);
router.get('/:id',articleController.getSingleArticle)


module.exports = router;
