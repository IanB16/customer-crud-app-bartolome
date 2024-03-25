const mongoose = require ('mongoose');

const CustomerSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter user ID"],
            unique: true
        },
        firstName: {
            type: String,
            required: [true, "Please enter first name"]
        },
        lastName: {
            type: String,
            required: [true, "Please enter last name"]
        },
        address: {
            type: String,
            required: [true, "Please enter address"]
        },
        bday: {
            type: Date,
            required: [true, "Please enter birthday in YYYY-mm-dd format"]
        },
        username: {
            type: String,
            required: [true, "Please enter username"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter password"]
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'pending'], 
            default: 'pending' 
        }
    },
    {
        timestamps: true
    }
);


const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;