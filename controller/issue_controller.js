const Issue = require('../models/issue');
const Project = require('../models/project');

// module.exports.CreateIssue = function(req,res){    
//     Project.findOne({_id : req.body.projectid},function(err,projectData){        
//         if(projectData){
//             Issue.findOne({title : req.body.title},function(err,issuedata){
//                 if(!issuedata){
//                     Issue.create({
    
//                         title : req.body.title,
//                         author : req.body.author,
//                         discription : req.body.discription,
//                         user : req.user._id,
//                         project : req.body.projectid
                        
//                     },function(err,issue){
//                         projectData.issues.push(issue);
//                         projectData.save();
//                         if(err){console.log('error while creating issue -->> ',err);return;}
//                         return res.redirect('back');
//                     });
//                 }
//             });
//         }
//         return res.redirect('back');               
//     });    
// }


module.exports.CreateIssue = function(req,res){    
    Project.findOne({_id : req.body.projectid},function(err,projectData){        
        if(projectData){
            Issue.create({

                title : req.body.title,
                author : req.body.author,
                discription : req.body.discription,
                user : req.user._id,
                project : req.body.projectid
                
            },function(err,issue){
                projectData.issues.push(issue);
                projectData.save();
                if(err){console.log('error while creating issue -->> ',err);return;}
                res.redirect('back');
            });
        }
    });    
}