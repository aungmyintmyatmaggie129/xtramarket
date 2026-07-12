//Server

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./model/post');
const expressLayouts = require('express-ejs-layouts');
const {cardData,citys} = require('./public/js/cardData');
const {quickviewData,iconData} = require('./public/js/quickviewData.js')
require("dotenv").config();


app.set("views", "./views");
app.set("view engine", "ejs");
app.set('layout', './layout/default');
app.use(express.static('public'));
app.use(express.urlencoded({ extends: true }));
app.use(expressLayouts);

//Connecting MongoDB
const dbLink = process.env.DBURL
mongoose.connect(dbLink).then(() => {
    console.log('db connected...');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT} ...`);
    })

}).catch(e => {
    console.log('Cannot connect to db.')
})

app.use((req, res, next) => {
    res.locals.quickviewData = quickviewData;
    res.locals.iconData = iconData;
    next();
})

//This is redirect to home page
app.get('/', (req, res) => {
    res.redirect('/index' );
})

//This is home page
app.get('/index', (req, res) => {
    // Sending Card Data to home Page
    res.render('index', { cardData: cardData.slice(0, 8), title: "Home Page"});
})


app.get('/newproduct', (req, res) => {
    // Sending Card Data to new product Page
    res.render('newproduct', { cardData, title: "Products"});
})

app.get('/blog', (req, res) => {
    res.render('blog', {title: "Blog Page"});
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact Page"});
})

app.get('/cart', async(req, res) => {
    // Sending Card Data to new product Page
    let posts = await Post.find().sort({createdAt: -1});
    // console.log(posts)
    res.render('cart', { cardData: cardData.slice(4, 8) , posts ,title: "Cart Page"});
    // console.log(posts);
    // console.log(posts.img)
})

// Adding Item to Cart
app.post('/cart/addToCart', async(req, res) => {
    let {img, productFullName, price, qty} = req.body;
    let post = new Post({img, productFullName, price, qty});
    await post.save();
    res.redirect('/cart');
})

// Deleting Item from Cart
app.get('/cart/delete:id', async(req, res) => {
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.redirect('/cart');
})

app.post('/cart/shop:id', async(req, res) => {
    let id = req.params.id;
    let  {qty} = req.body;
    await Post.findByIdAndUpdate(id, {qty})
    res.redirect('/cart');
})

// This is Checkout Page
app.get('/checkout', async(req, res) => {
    let posts = await Post.find().sort({createdAt: -1});
    // console.log(posts)
    res.render('checkout', {posts, citys, title: 'Checkout Page'})
})

app.get('/404', (req, res) => {
    res.render('404', {title: "404 Page"});
})
