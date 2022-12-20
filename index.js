const express = require('express');
const CookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(expressLayouts);
app.use(CookieParser());
//extract style and script from the sub pages into the layout page
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);


app.use(express.urlencoded());



app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views','./views');// ? why we have to use app.set views after the app . use session


app.use(session({
    name : 'issue tracker',
    secret : 'issyou',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 10)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('the error is : ',err);
        return;
    }
    console.log('server is started...');
});