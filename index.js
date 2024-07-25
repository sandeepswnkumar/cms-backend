import dotenv from 'dotenv';
import express from 'express';
import app_router from './src/app.route.js'
import syncAndSeed from './src/config/database.js';
const env_file_path = './.env.' + process.env.NODE_ENV
dotenv.config({ path: env_file_path });
const PORT = process.env.APP_PORT || 8000;
// syncAndSeed();
const app = express();
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use('/', app_router)


app.listen(PORT, function () {
    console.log('Server Connected on Port : ', PORT)
})
