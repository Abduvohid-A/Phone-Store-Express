import Phone from "../models/phones.models.js";


export const getAllphones = async (req, res) => {
    try {
        const phones = await Phone.find();
        if (phones.length === 0) {
            return res.status(404).json({ message: "Phone not Found" });
        };
        res.status(200).json(phones);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const createPhone = async (req, res) => {
    try {
        const phoneData = new Phone(req.body);
        const newPhone = await phoneData.save();
        res.status(201).json(newPhone);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const getPhone = async (req, res) => {
    try {
        const id = req.params.id
        const phoneExist = await Phone.findOne({ _id: id });
        if (!phoneExist) {
            return res.status(404).json({ message: "Phone not Found" });
        };
        res.status(200).json(phoneExist);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const deletePhone = async (req, res) => {
    try {
        const id = req.params.id
        const phoneExist = await Phone.findOne({ _id: id });
        if (!phoneExist) {
            return res.status(404).json({ message: "Phone not Found" });
        };
        await Phone.findByIdAndDelete(id);
        res.status(200).json({ message: "Phone deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const putPhone = async (req, res) => {
    try {
        const id = req.params.id
        const phoneExist = await Phone.findOne({ _id: id });
        if (!phoneExist) {
            return res.status(404).json({ message: "Phone not Found" });
        };
        const updatePhone = await Phone.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatePhone);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

