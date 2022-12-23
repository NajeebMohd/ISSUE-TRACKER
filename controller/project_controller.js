const { populate } = require('../models/project');
const Project = require('../models/project');

module.exports.CreateProject = function(req,res){
    Project.findOne({ProjectName:req.body.ProjectName},function(err,project){
        if(err){console.log('error while creating the project -->> ,',err);return;}
        if(!project){
            Project.create({
                ProjectName : req.body.ProjectName,
                author: req.body.author,
                discription : req.body.discription,
                user : req.user._id
            },function(err,project){
                if(err){console.log('error while creating the project ',err);return;}                        
            });
        }
    });
    res.redirect('back');        
}

module.exports.ProjectDetails = function(req,res){    
    Project.findById(req.params.id)
    .populate({
        path : 'issues'        
    })
    .exec(function(err,project){
        if(err){console.log('error in finding the project -->>',err);return;}        
        res.render('project_details',{
            title : 'Project Details',
            project : project
        });
    });
}

module.exports.SearchProject = function(req,res){   
    console.log(req.body.type,req.body.search); 
    const type = req.body.type;
    Project.findOne({type : req.body.search},function(err,project){
        if(err){console.log('error in searching the project -->> ',err);return;}
        if(project){
            console.log(project);
        }
    });
    res.redirect('back');
}