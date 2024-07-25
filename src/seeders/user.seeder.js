import User from "../models/user.model.js";
import constants from "../config/constants.js";
import { Op } from "sequelize";

const user_seeder = async () => {

    const user = await User.findOne({
        where : {
            [Op.and] : [{id : 1},{name:'System User'}]
        }
    })
    if(user){
       return; 
    }
    await User.bulkCreate([
        {
            name: 'System User',
            email:"info@gmail.com",
            password: "system_user",
            user_type : 'admin',
            created_at : new Date(),
            updated_at: constants.SYSTEM_USER
        },
    ]);
};

export default user_seeder;