const mongoose = require('mongoose');
const emailRegex  = require('../constants');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 3,
    required: [true, 'Please enter first name'],
    trim: true
  },
  lastname: {
    type: String,
    minlength: 3,
    alias: 'surname',
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    validate: function(value) {
      return emailRegex.test(value);
    }
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'non_binary', 'prefer_not_to_mention'],
    trim: true
  },
  city:{
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    default: 0.0,
    validate(value) {
      if (value < 0.0){
         throw new Error("Negative salary is not allowed.");
      }
    }
  }
},
  {
    timestamps: true,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;

