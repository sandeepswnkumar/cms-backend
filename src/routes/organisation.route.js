

import { Router } from "express";
import { create,update,get } from "../controllers/orgination.controller.js";

const organisation_router = Router();

organisation_router.route('/organisation').post(create)
organisation_router.route('/organisation/:org_id').put(update)
organisation_router.route('/organisation/:org_id?').get(get)
// auth_router.route('/logout').post(resgister_request,register)


export default organisation_router;