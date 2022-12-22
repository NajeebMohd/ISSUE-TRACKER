const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    ProjectName : {
        type : String,
        required : true,
        unique : true
    },
    author : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    issues : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Issue'
        }
    ]    
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;