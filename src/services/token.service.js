import jwt from 'jsonwebtoken';
import Token from '../models/token.model.js';
import { update_user } from './auth.service.js';

export async function create_access_token(payload){
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    })
    const decoded_token = jwt.decode(token);
    let expirationTime = decoded_token.exp * 1000;
    expirationTime = new Date(expirationTime).toDateString() + " " + new Date(expirationTime).toLocaleTimeString();
    await Token.create({token, user_id : payload.user_id, expire_at: new Date(expirationTime)})
    return token;
}

export function create_refresh_token(user_id){
    const token = jwt.sign({user_id}, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    })
    return token;
}

export async function create_access_refresh_token(user){
    const access_token_payload = {
        user_id : user.id,
        email : user.email,
        user_type : user.user_type,
        name : user.name,
    }
    const access_token = await create_access_token(access_token_payload);
    const refresh_token = create_refresh_token(user.id)
    await update_user({refresh_token},user.id);
    return {access_token, refresh_token};
}