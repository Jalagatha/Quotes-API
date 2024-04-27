import jwt from "jsonwebtoken";
import "dotenv/config";
import { StatusCodes } from "http-status-codes";



const createToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "24h" });
}
const verifyToken = (req, res, next) => {
    if(req.headers.authorization) {
        let authHeader = req.headers.authorization;
        let token = authHeader.split(" ")[1];

        if(token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
                if(err) {
                    res.status(StatusCodes.FORBIDDEN).send("Invalid Token Provided");
                } else {
                    req.tokenData = decode;
                    next();
                }
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).send("Auth Token is Missing");
        }
    } else {
        res.status(StatusCodes.BAD_REQUEST).send("Missing Authorization Header");
    }
}

export {
    createToken ,verifyToken
};