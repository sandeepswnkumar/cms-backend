import { body } from "express-validator";

const login_request = [
    body('email')
    .if(body('cms_id').not().exists())
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter valid email'),
    
    body('cms_id')
    .if(body('email').not().exists())
    .notEmpty().withMessage('cms_id is required'),
    
    body('password').notEmpty().withMessage('Password is required'),
]


const resgister_request = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Please enter valid email'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('user_type').notEmpty().withMessage('User Type is required').isIn(['admin', 'staff', 'student']).withMessage('Please enter valid user type'),
]

export {login_request,resgister_request};