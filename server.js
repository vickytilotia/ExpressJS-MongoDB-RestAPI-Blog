const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const articleRouter = require('./routes/article');
const Article = require('./models/article');
const methodOverride = require('method-override')


// Init db 
connectDB()

// express app
const app = express();

// view engine convert all the ejs code to html 
app.set('view engine', 'ejs');

// to access req.body.title etc 
app.use(express.urlencoded({ extended: false }));
// to use delete method in html
app.use(methodOverride('_method'));



app.get('/', async (req, res) => {
    articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles });
});



app.use('/articles', articleRouter)

// PORT 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is listening at ${port}`));