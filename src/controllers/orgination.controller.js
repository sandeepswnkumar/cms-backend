
import { create_organisation, update_organisation,get_organisation } from "../services/organisation.service.js";
import api_response from "../helpers/api_response.js"
import response_code from "../helpers/response_code.js";
import Exception, {exception_type} from "../helpers/exception.js";

export async function create(req, res){
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Exception(JSON.stringify(errors.array()), response_code.BAD_REQUEST, exception_type.VALIDATION)
        }
        let response = await create_organisation(req)
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
        let response = await update_organisation(req.body, )
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

export async function get(req, res){
    try{
        let org_id = req.params.org_id ? req.params.org_id : null;
        let response = await get_organisation(req, org_id)
        // if(response.error){
        //     return res.status(response.status_code).json(new api_response(false,response.status_code,response.error));
        // }
        // return res.json(new api_response(true,response_code.CREATED,"User created successfully",response));
    }catch(err){
        let message = err.message
        if(err.type == exception_type.VALIDATION){
            message = JSON.parse(err.message)
        }
        return res.status(response_code.OK).json(new api_response(false, response_code.BAD_REQUEST, message))
    }
}