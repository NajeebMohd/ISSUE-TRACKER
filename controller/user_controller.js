const User = require('../models/user.js');
const Project = require('../models/project.js');

module.exports.SignUp = function(req,res){
    return res.render('sign_up',{
        title : 'Sign Up'
    });
}
module.exports.Preview = function(req,res){
    Project.find({},function(err,project){
        if(err){console.log('err finding the list of projects -->> ',err);return;}
        return res.render('preview',{
            title : "Projects",
            projects : project       
        });
    });
}

module.exports.create = function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password) return res.redirect('back');

    User.findOne({email : req.body.email},function(err,user){
        if(err) {console.log('error in finding in user for creating user...');return;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('errro while creating the user in db -->> ',err);return;}
                return res.redirect('/');
            });
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.CreateSession = function(req,res){    
    return res.redirect('/users/preview');
}