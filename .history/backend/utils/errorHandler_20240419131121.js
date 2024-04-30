class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor)
        //ithu stack endra property ah tharum
        //antha sta
    }
}