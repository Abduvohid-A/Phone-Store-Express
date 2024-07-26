import mongoose from "mongoose";

const { Schema, model } = mongoose;

const salesSchema = new Schema({
  phone_id: {
    type: Schema.Types.ObjectId,
    ref: "phones",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: "employees",
    required: true,
  },
  sale_date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default model("sales", salesSchema);
