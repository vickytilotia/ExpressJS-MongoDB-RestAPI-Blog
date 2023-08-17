const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

// create a article page
router.get('/new', (req, res) => {
    // empty article object is added to avoid error 
    // as the html page has article variables 
    res.render('articles/new', { article: new Article() })
});

// edit article by id
router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
});


// get article by slug
router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug })
    if (!article) res.redirect('/')
    res.render('articles/show', { article: article })
})

// submit new article 
router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        article = await article.save();
        res.redirect(`/articles/${article.slug}`);
    } catch (error) {
        console.log(error)
        res.render('articles/new', { article: article });
    }

});

// edit a article 
router.put('/:id', async (req, res) => {
    let article = await Article.findById(req.params.id)

    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown


    article = await article.save();
    res.redirect(`/articles/${article.slug}`);


});

// delete a article
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router