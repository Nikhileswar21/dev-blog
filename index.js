const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// import the routes
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const staticRoute = require('./routes/staticRoute');


//configurations
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


//middleware
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json());



// register the routes 
app.use('/', staticRoute);
app.use('/user', userRoute);
app.use('/blog', blogRoute);


app.listen(8000, () => console.log('server started at port 8000'));