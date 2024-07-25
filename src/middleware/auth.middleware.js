function auth_middleware(req, res, next){

    req.created_at = new Date();
    req.updated_at = new Date();
    next();
}