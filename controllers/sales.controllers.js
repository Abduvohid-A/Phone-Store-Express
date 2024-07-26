import Sale from "../models/sales.models.js";

export const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    if (sales.length === 0) {
      return res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json(sales);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const createSale = async (req, res) => {
  try {
    const saleExist = await Sale.findOne(req.body);
    if (saleExist) {
      return res.status(400).json({ message: "Already Exist" });
    }
    const saleData = new Sale(req.body);
    const newSale = await saleData.save();
    res.status(201).json(newSale);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getSale = async (req, res) => {
  try {
    const id = req.params.id;
    const saleExist = await Sale.findOne({ _id: id });
    if (!saleExist) {
      return res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json(saleExist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const id = req.params.id;
    const saleExist = await Sale.findOne({ _id: id });
    if (!saleExist) {
      return res.status(404).json({ message: "User not Found" });
    }
    await Sale.findByIdAndDelete(id);
    res.status(200).json({ message: "Sales deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const putSale = async (req, res) => {
  try {
    const id = req.params.id;
    const saleExist = await Sale.findOne({ _id: id });
    if (!saleExist) {
      return res.status(404).json({ message: "User not Found" });
    }
    const updateSale = await Sale.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateSale);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
