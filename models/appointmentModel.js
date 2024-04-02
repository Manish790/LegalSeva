const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
     userId: {
      type: String,
      required: true,
    },
    //  userName: {
    //   type: String,
    //   required: true,
    // },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctors', // Reference to the 'doctors' collection
      required: true,
    }, 
    
    
    doctorFirstName:
     {type:String,
      required:true,
    }
    ,
    doctorLastName: {type:String,
    required:true
  },


    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
