const User = require('../models/user.js');

module.exports.SignUp = function(req,res){
    return res.render('sign_up',{
        title : 'Sign Up'
    })
}

module.exports.create = function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password) return res.redirect('back');
    User.findOne({email : req.body.email},function(err,user){
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