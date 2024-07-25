class Exception extends Error {
    constructor(message, status = 500, type = 'Exception') {
        super(message);
        this.type = type;
        this.status = status;
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export const exception_type = {
    VALIDATION: 'VALIDATION_EXCEPTION'
}

export default Exception;