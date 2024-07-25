import { Op } from "sequelize";
import Organisation from "../models/organisation.model.js";

export async function create_organisation(req){
    const organisation = await Organisation.create(req.body);
    return organisation;
}

export async function update_organisation(update_org_request_data, org_id){

}

export async function get_organisation(req, org_id = null){
    let organisation_condition = {};
    if(org_id !== null){
        organisation_condition['id'] = org_id;
    }else{
        organisation_condition['organisation_name'] = {
            [Op.iLike]: `%${req.query.organisation_name}%`
        };
    }
    organisation = await Organisation.findOne({where:{id:org_id}});
}   