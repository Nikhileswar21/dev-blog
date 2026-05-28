const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

//connect to the database  

mongoose.connect('mongodb://localhost/devblog')
.then(() => console.log("connected to the database"))
.catch(err => console.log('error connecting to the database',err));

// import the routes
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const staticRoute = require('./routes/staticRoute');
const {checkForToken} = require('./middlewares/auth');


//configurations
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));




//middleware
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForToken);


// register the routes 
app.use('/', staticRoute);
app.use('/user', userRoute);
app.use('/blog', blogRoute);


app.listen(8000, () => console.log('server started at port 8000'));