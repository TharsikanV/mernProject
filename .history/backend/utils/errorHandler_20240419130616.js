class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message,statusCode)
    }
}