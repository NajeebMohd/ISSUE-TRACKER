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

module.exports.ProjectDetails = function(req,res){
    Project.findById(req.params.id,function(err,project){
        if(err){console.log('error in finding the project -->>',err);return;}
        res.render('project_details',{
            title : 'Project Details',
            project : project
        });
    });
}