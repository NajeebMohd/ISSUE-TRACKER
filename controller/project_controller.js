const Project = require('../models/project');

module.exports.CreateProject = function(req,res){
    Project.findOne({ProjectName:req.body.ProjectName},function(err,project){
        if(err){console.log('error while creating the project -->> ,',err);return;}
        if(!project){
            Project.create(req.body,function(err,project){
                if(err){console.log('error while creating the project ',err);return;}                        
            });
        }
    });
    res.redirect('back');        
}