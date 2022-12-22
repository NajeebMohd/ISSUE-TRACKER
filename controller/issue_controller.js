const Issue = require('../models/issue');
const Project = require('../models/project');

module.exports.CreateIssue = function(req,res){
    Issue.findOne({title : req.body.title},function(err,issue){
        if(err){console.log('err while creating the issue -->> ',err);return;}
        if(!issue){
            Issue.create({

                title : req.body.title,
                author : req.body.author,
                discription : req.body.discription,
                user : req.user._id,
                project : req.body.projectid
                
            },function(err,issue){
                if(err){console.log('error while creating issue -->> ',err);return;}
                res.redirect('back');
            });
        }
    });
}