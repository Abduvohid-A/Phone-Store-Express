import mongoose from "mongoose";

const { Schema, model } = mongoose;

const employeesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default model("employees", employeesSchema);
