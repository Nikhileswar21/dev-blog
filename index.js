const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// import the routes
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const staticRoute = require('./routes/staticRoute');


//middleware
app.use(bodyParser.json());


// register the routes 
app.use('/user', userRoute);
app.use('/blog', blogRoute);
app.use('/static', staticRoute);

app.listen(8000, () => console.log('server started at port 8000'));