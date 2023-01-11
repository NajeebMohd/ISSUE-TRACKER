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
    return res.redirect('back');        
}

module.exports.ProjectDetails = function(req,res){    
    Project.findById(req.params.id)
    .populate({
        path : 'issues'        
    })
    .exec(function(err,project){
        if(err){console.log('error in finding the project -->>',err);return;}        
        return res.render('project_details',{
            title : 'Project Details',
            project : project
        });
    });
}

module.exports.SearchProject = function(req,res){      
    const type = req.body.type;   
    
    Project.findOne({_id : req.body.projectid})
    .populate(
        type == 'title' ? {
            path : 'issues',
            match :{
                title : req.body.search
            }
        } :  type == 'author' ? {
            path : 'issues',
            match :{
                author : req.body.search
            }
        } : {
            path : 'issues',
            match : {
                discription : req.body.search
            }
        }

    )
    .exec(function(err,project){
        // console.log(project);
        if(err){console.log('error in finding the project -->>',err);return;}
        return res.render('project_details',{
            title : 'Project Details',
            project : project
        });        
    });
}//if no search result display no results