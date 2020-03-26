const mongoose = require('mongoose')
var customersSchema = new mongoose.Schema({
    fullName: String,
    dob: String,
    contact: String,
    nationality: String,
    status: String,
    stage: String,
    lcLetter: String,
    otherLoan: String,
    refereeName: String,
    refereeDoB: String,
    refereeOccupation: String,
    vehicleType: String,
    downPayment: Number,
    todayDate: String,

});

module.exports = mongoose.model("Customer", customersSchema);