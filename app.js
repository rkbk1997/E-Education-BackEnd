var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var publicRouter = require('./routes/public');
// var adminRouter = require('./routes/admin');
// var userRouter = require('./routes/users');
var cors= require('cors');
var app = express();
app.use(express.static('./uploads'));
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));

var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/eeducation', {useNewUrlParser: true,useUnifiedTopology: true},(error)=>{
    if(!error){
        console.log("Connection Success");
    }
    else{
        console.log("connection Not success");
    }
});

//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
  name:'token',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', publicRouter);
// app.use('/admin', adminRouter);
// app.use('/user', userRouter);

app.listen('8000',(req,res)=>{
    console.log('server start at 8000')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
