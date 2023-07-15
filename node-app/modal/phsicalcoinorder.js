const mongoose = require("mongoose");


const PhyscialCoinSchema = new mongoose.Schema({
    diameter:{
        type: String,
        required: true
    },
    thickness:{
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    composition:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
    },
    userId:{
        type: String,
        required: true,
    }
});
const PhyscialCoin = new mongoose.model("PhyscialCoin", PhyscialCoinSchema);
module.exports = PhyscialCoin;