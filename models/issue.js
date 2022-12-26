const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        unique : false        
    },
    author : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    lable : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    }
},{
    timestamps : true
});

const Issue = mongoose.model('Issue',issueSchema);
module.exports = Issue;