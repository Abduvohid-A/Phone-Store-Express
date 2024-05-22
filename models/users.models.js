import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        unique: true,
        required: true
    }
});

export default model('users', usersSchema);