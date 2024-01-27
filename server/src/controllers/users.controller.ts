import { createNewUser, userExist } from "../services";
import { asyncHandler, generateAccessToken } from "../utils";

const registerUser = asyncHandler(async function (req, res) {

    const { email, password, firstName, lastName } = req.body;

    const user = await userExist(email);

    if (user) {
        return res.status(400).json({ message: "User already Exist" });
    }

    const userData = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    const newUser = await createNewUser(userData);

    const token = generateAccessToken(newUser);

    res.cookie("auth_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: 86400000 });
    
    return res.sendStatus(200);

});

export { registerUser };