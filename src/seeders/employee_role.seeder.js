
import EmployeeRole from "../models/employee_role.model.js";
import constants from "../config/constants.js";

const employee_role_seeder = async () => {
    await EmployeeRole.truncate();
    await EmployeeRole.bulkCreate([
        {
            name: 'Admin',
            enabled:true,
            created_at: new Date(),
            created_by: constants.SYSTEM_USER
        },
        {
            name: 'Manager',
            enabled:true,
            created_at: new Date(),
            created_by: constants.SYSTEM_USER
        },
        {
            name: 'Teacher',
            enabled:true,
            created_at: new Date(),
            created_by: constants.SYSTEM_USER
        }
    ]);
};

export default employee_role_seeder;