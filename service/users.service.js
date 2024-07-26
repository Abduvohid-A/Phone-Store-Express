import User from "../models/users.models.js";


export const createUserService = async (name, surname, tel) => {
    try {
        const userExist = await User.findOne(name, surname, tel);
        if (userExist) {
            return [{message : "User already exist"}, 400];
        };
        const userData = new User({name, surname, tel});
        const newUser = await userData.save();
        return [newUser, 201];
    } catch (error) {
        console.log(error);
        return [error.message, 500]
    }
}