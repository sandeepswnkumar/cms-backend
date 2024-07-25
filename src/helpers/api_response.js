
class api_response{
    constructor(success=false,status_code=500, message="Oops, Something went wrong", data = []){
        this.success = success,
        this.status_code = status_code,
        this.message = message,
        this.data = data
    }
}


export default api_response;