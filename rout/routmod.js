const mongoose = require('mongoose');

const RoutSchema = mongoose.Schema({
    mark1:{
        type:String,
        required:true
    },
    mark2:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    }
});

const Rout = module.exports = mongoose.model('Rout',RoutSchema);