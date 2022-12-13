module.exports.home = function(req,res){
    res.cookie('_id',44);
    return res.render('home',{
        title : 'Home Page'
    });
}
module.exports.SignUp = function(req,res){
    return res.render('sign_up',{
        title : 'Sign Up'
    })
}