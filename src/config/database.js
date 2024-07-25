import sequelize from "../models/sequelize.js";
import run_seeder from "../seeders/run_seeders.js";
import { initCity } from "../models/city.model.js";
import { initEmployeeRole } from "../models/employee_role.model.js";
import { initUser } from "../models/user.model.js";
import { initToken } from "../models/token.model.js";
import { initStudentDetails } from "../models/student_detail.model.js";
import { initCountry } from "../models/country.model.js";
import { initState } from "../models/state.model.js";
import { initOrganisation } from "../models/organisation.model.js";
import { initEmployeeDetail } from "../models/employee_detail.model.js";

const syncAndSeed = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        initModels();

        // Disable foreign key checks
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

        // Sync models
        await sequelize.sync({ alter: true,logging:false });


        console.log('Database & tables created!');

        // await run_seeder();

        console.log('Seed data inserted!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
};

const initModels = () => {
    initUser();
    initEmployeeRole();
    initToken();
    initCountry();
    initState();
    initCity();
    initOrganisation();
    initStudentDetails();
    initEmployeeDetail();
    
};


export default syncAndSeed;