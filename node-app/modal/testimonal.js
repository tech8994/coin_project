const mongoose = require("mongoose");


const testimonalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
});

const testimonalSchemaVar = new mongoose.model("testimonalSchema", testimonalSchema);
module.exports = testimonalSchemaVar;
