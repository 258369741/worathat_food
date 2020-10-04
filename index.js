const express = require('express');
const hbs =require('express-handlebars');
const path = require('path');
const restaurantRouter = require('./routes/restaurant')
const indexRouter = require('./routes/index');
const PORT = process.env.PORT || 3000;
const app = express();

//template engine stting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//Middleware เพื่ออ่าน req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Use Router
app.use('/api',restaurantRouter);
app.use('/',indexRouter);

//middleware
app.use(express.static(path.join(__dirname,'public')));


app.listen(
        PORT,
        () => {
          console.log(`Listening to port ${PORT}`);
        }
      );
      