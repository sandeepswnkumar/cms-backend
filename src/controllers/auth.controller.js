
import api_response from "../helpers/api_response.js"
import response_code from "../helpers/response_code.js";
import { login_service, register_user,update_user } from "../services/auth.service.js";
import { validationResult } from "express-validator";
import Exception, {exception_type} from "../helpers/exception.js";

export async function login(req, res){
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Exception(JSON.stringify(errors.array()), response_code.BAD_REQUEST, exception_type.VALIDATION)
        }
        let response = await login_service(req)
        if(response.error){
            return res.status(response.status_code).json(new api_response(false,response.status_code,response.error));
        }
        return res.json(new api_response(true,response_code.CREATED,"User Fetched successfully",response));
    }catch(err){
        let message = err.message
        if(err.type == exception_type.VALIDATION){
            message = JSON.parse(err.message)
        }
        return res.status(response_code.OK).json(new api_response(false, response_code.BAD_REQUEST, message))
    }
}

export async function register(req, res){
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Exception(JSON.stringify(errors.array()), response_code.BAD_REQUEST, exception_type.VALIDATION)
        }
        let response = await register_user(req)
        console.log("response : ",response)
        if(response.error){
            return res.status(response.status_code).json(new api_response(false,response.status_code,response.error));
        }
        return res.json(new api_response(true,response_code.CREATED,"User created successfully",response));
    }catch(err){
        let message = err.message
        if(err.type == exception_type.VALIDATION){
            message = JSON.parse(err.message)
        }
        return res.status(response_code.OK).json(new api_response(false, response_code.BAD_REQUEST, message))
    }
}

export async function update(req, res){
    try{
        let response = await update_user(req.body)
        if(response.error){
            return res.status(response.status_code).json(new api_response(false,response.status_code,response.error));
        }
        return res.json(new api_response(true,response_code.CREATED,"User updated successfully",response));
    }catch(err){
        let message = err.message
        if(err.type == exception_type.VALIDATION){
            message = JSON.parse(err.message)
        }
        return res.status(response_code.OK).json(new api_response(false, response_code.BAD_REQUEST, message))
    }
}

export async function logout(){
    
}