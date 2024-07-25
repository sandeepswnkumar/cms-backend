import constants from "../config/constants.js";

function post_request(req, res,next){
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    req.body.updated_by = constants.SYSTEM_USER;
    req.body.created_by = constants.SYSTEM_USER;
    console.log("post request");

    next();
}

export default post_request;