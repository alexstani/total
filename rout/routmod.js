const mongoose = require('mongoose');

const RoutSchema = mongoose.Schema({

    name:{
        type:String,
        required:false
    },
    mark:[{
        mark1:{
            type:String,
            required:true
        },
        mark2:{
            type:String,
            required:true
        }
    }],
    total:{
        type:String,
        required:false
    }
});

const Rout = module.exports = mongoose.model('Rout',RoutSchema);