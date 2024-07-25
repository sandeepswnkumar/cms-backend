
import { Router } from "express";
import auth_router from "./routes/auth.route.js";
import post_request from "./middleware/post_request.middleware.js";
import organisation_router from "./routes/organisation.route.js";


const app_router = Router();

app_router.use('/',post_request,auth_router);
app_router.use('/',post_request,organisation_router);

//-----------------Auth router
//User Login
//User Register
//User Logout
//Forget password
//Change password
//-----------------Auth router


//-----------------Student router
//Get Student
//Add Student
//Update Student
    //Update profile
    //Assign Course
    //Assign Batch
//Give Permission
//Delete Student
//-----------------Student router

//-----------------Coaching Staff/Admin router
//Get Staff
//Add Staff
//Update Staff
    //Update profile
    //Assign Course
    //Assign Batch
//Delete Student
//Give Permission
//-----------------Coaching Staff/Admin router


//-----------------Coaching Staff/Admin router
//Get Staff
//Add Staff
//Update Staff
    //Update profile
    //Assign Course
    //Assign Batch
//Delete Staff
//Give Permission
//-----------------Coaching Staff/Admin router

//-----------------Fee router
//Get fee
//Due list
//Add Fee
//Update Fee
//Delete Fee
//-----------------Fee router

//-----------------Fee router
//Get fee
//Due list
//Add Fee
//Update Fee
//Delete Fee
//-----------------Fee router

//-----------------Course router
//Get Course
//Add Course
//Update Course
//Delete Course
//Assign Fee on course
//-----------------Course router

//-----------------Permissoin router
//Get Role
//Add Role
//Update Role
//Delete Role
//-----------------Permissoin router

//-----------------Permissoin router
//Get Permision
//Add Permision
//Update Permision
//Delete Permision
//-----------------Permissoin router


export default app_router;