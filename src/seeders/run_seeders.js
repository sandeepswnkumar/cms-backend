
import employee_role_seeder from "./employee_role.seeder.js"
import user_seeder from "./user.seeder.js";

async function run_seeder(){
    await employee_role_seeder();
    await user_seeder();
}

export default run_seeder