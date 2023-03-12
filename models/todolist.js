const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    Description :{
        type: String,
        required: true
    },
    Category :{
        type: String,
        required: true
    },
    duedate :{
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    timestamps: true
});

const TodoList = mongoose.model("TodoList",todolistSchema);

module.exports=TodoList;