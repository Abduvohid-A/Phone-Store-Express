import Employee from "../models/employees.models.js";

export const getAllemployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    if (employees.length === 0) {
      return res.status(404).json({ message: "Employee not Found" });
    }
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const employeeExist = await Employee.findOne(req.body);
    if (employeeExist) {
      return res.status(400).json({ message: "This employee already exist" });
    }
    const employeeData = new Employee(req.body);
    const newEmployee = await employeeData.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employeeExist = await Employee.findOne({ _id: id });
    if (!employeeExist) {
      return res.status(404).json({ message: "Employee not Found" });
    }
    res.status(200).json(employeeExist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employeeExist = await Employee.findOne({ _id: id });
    if (!employeeExist) {
      return res.status(404).json({ message: "Employee not Found" });
    }
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const putEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employeeExist = await Employee.findOne({ _id: id });
    if (!employeeExist) {
      return res.status(404).json({ message: "Employee not Found" });
    }
    const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateEmployee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
