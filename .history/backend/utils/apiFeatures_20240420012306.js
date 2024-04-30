class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }

    search(){
        let keyword=this.queryStr.keyword?{
            name:{
                $regex:this.queryStr
            }
        }
    }
}