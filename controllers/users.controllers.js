import User from "../models/users.models.js";



export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "User not Found" });
        };
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const createUser = async (req, res) => {
    try {
        const userExist = await User.findOne(req.body);
        if (userExist) {
            return res.status(400).json({ message: "User already Exist" });
        };
        const userData = new User(req.body);
        const newUser = await userData.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not Found" });
        };
        res.status(200).json(userExist);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not Found" });
        };
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "Users deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const putUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not Found" });
        };
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

