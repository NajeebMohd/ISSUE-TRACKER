const passport = require('passport');

const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new localStrategy({
        usernameField : 'email',
        //passReqToCallback : true
    },
    function(email,password,done){
        console.log('wait... Authenticating!!!');        
        User.findOne({email : email},function(err,user){
            if(err){
                console.log('error in finding the user...-->> ',err);
                return done(err);
            }
            if(!user || user.password != password){
                console.log('invalid user name or password -->> ');
                return done(null,false);
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user,done){
    console.log('in serialixe...');
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    console.log('in deserialixe...');
    User.findById(id,function(err,user){
        if(err){
            console.log('error in deserializing user -->>',err);
            return done(err);
        }
        return done(null,user);
    });
});

passport.checkAuthentication = function(req,res,next){
    console.log('checking authenticating...');
    if(req.isAuthenticated()) return next();
    return res.redirect('/');
}
passport.setAuthenticatedUser = function(req,res,next){
    console.log('setting authenticating...');    
    if(req.isAuthenticated()) res.locals.user = req.user;    
    next();
}

module.exports = passport;