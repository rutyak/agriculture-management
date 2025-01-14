const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema(
  {
   fieldName: {
    type: String,
    require: true,
    unique: true,
    trim: true
   },
   location:{
    latitude: {
      type: Number,
      required: true
    },
    longitude:{
      type: Number,
      required: true
    },
   },
    cropType: {
      type: String,
      required:true,
      trim: true
    },
    areaSize: {
      type: Number,
      required: true
    },
   },{timestamps: true}
  );

const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;
