import { body } from "express-validator";

export const create_organisation_request = [
    body('organisation_name').notEmpty().withMessage('Organisation name is required'),
    body('organisation_email').notEmpty().withMessage('Organisation email is required'),
    body('organisation_address_line1').notEmpty().withMessage('Organisation address line1 is required'),
    body('organisation_city_id').notEmpty().withMessage('Organisation city is required'),
    body('organisation_state_id').notEmpty().withMessage('Organisation state is required'),
    body('organisation_country_id').notEmpty().withMessage('Organisation country is required'),
]