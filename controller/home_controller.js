module.exports.home = function(req,res){
    res.cookie('user.id',33);   
    return res.render('home',{
        title : 'Home Page'
    });
}
