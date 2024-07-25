

import { Router } from "express";
import { register, login,update,logout } from "./../controllers/auth.controller.js";
import { login_request,resgister_request } from "../requests/auth.request.js";

const auth_router = Router();

auth_router.route('/login').post(login_request,login)
auth_router.route('/register').post(resgister_request,register)
auth_router.route('/upate_user').put(update)
// auth_router.route('/logout').post(resgister_request,register)


export default auth_router;