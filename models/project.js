const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    ProjectName : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    }
});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;