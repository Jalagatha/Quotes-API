import { StatusCodes } from "http-status-codes";

function isAdmin(req, res, next) {
    if(req.tokenData.authorRole === "ADMIN"){
        next();
    }else{
        res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"})
    }
}

function isUser(req, res, next) {
    if(req.tokenData.authorRole === "USER"){
        next();
    }else{
        res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"})
    }
}


export {
   isAdmin,
   isUser 
}
