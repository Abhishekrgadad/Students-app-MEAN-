const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        usn: {
            type: String,
            required: true
        },
        section:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phone: {
            type: String,
            required:true
        },

    }
);

const Student = mongoose.model('students',StudentSchema);

module.exports = Student;