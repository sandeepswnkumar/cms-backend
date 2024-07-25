import { Op } from "sequelize";
import Exception from "../helpers/exception.js";
import response_code from "../helpers/response_code.js";
import User from "../models/user.model.js";
import { create_access_refresh_token } from "./token.service.js";

export async function login_service(req) {
    try {
        const user = await User.scope('withPassword').findOne({
            where : {
                [Op.or] :  [
                    req.body.email ?  {email : req.body.email} : {},
                    req.body.cms_id ? {cms_id : req.body.cms_id}: {}
                ]
            },
        });

        if(!user) throw new Exception('Invalid Credentials', response_code.BAD_REQUEST);
        const is_password_valid = user.compare_password(req.body.password);
        if(!is_password_valid) throw new Exception('Invalid Credentials', response_code.BAD_REQUEST);
        const token = await create_access_refresh_token(user);
        token.user = await User.findByPk(user.id);
        return token;
    } catch (err) {
        return { 'error': err.message, 'status_code': err.status ?? response_code.BAD_REQUEST }
    }
}

export async function register_user(req) {
    try {
        const user = await User.create(req.body);
        return user;
    } catch (err) {
        return { 'error': err.original.message ?? err.message, 'status_code': err.status ?? response_code.BAD_REQUEST }
    }
}

export async function update_user(update_user_request,user_id){
    try {
        if(!user_id) throw new Exception('User Id not found', response_code.BAD_REQUEST)
        const user = await User.update(update_user_request, {
            where: {
                id: user_id
            }
        })
        return user;
    } catch (err) {
        return { 'error': err.original.message ?? err.message, 'status_code': err.status ?? response_code.BAD_REQUEST }
    }
}

