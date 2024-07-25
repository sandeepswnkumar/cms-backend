import config from '../config/config.js';
import { Sequelize,QueryInterface } from "sequelize";
import {initCity} from './city.model.js';
import dotenv from 'dotenv';
const env_file_path = './.env.'+process.env.NODE_ENV 
dotenv.config({ path: env_file_path });
const sequelize = new Sequelize(config[process.env.NODE_ENV]);

export default sequelize;
