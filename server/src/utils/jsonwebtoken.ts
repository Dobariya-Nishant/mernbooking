
import { sign, verify } from "jsonwebtoken";
import { UserType } from "../models";

function generateAccessToken(user: UserType) {

    const token = sign({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
    },
        process.env.TOKEN_SECRET_PRIVATE as string,
        { expiresIn: "1d" }
    );

    return token;
}

function verifyAccessToken(user: UserType) {

    // const token = verify();

    // return token;
}

export { generateAccessToken, verifyAccessToken };
