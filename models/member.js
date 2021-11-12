const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    nic:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        
    },
    userType: {
        type: String,
        required: true,
    },
    
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;