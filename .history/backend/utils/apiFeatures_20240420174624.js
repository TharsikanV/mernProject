class APIFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }

    search(){
        let keyword=this.queryStr.keyword?{
            name:{//name field la paakkum
                $regex:this.queryStr.keyword,//match aakithaannu paakum
                $options:'i'//case sencitive
            }
        }:{};

        this.query.find({...keyword})//valamamaarithaan ithuvum 
        return this;
    }

    filter(){
        const queryStrCopy={...this.queryStr};
        
    }
}

module.exports=APIFeatures;