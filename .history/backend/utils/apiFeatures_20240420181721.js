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
        //before
        // console.log(queryStrCopy);

        //removing fields from query
        const removeFields=['keyword','limit','page'];
        removeFields.forEach(field=>delete queryStrCopy[field]);

        //after 
        // console.log(queryStrCopy);

        let queryStr=JSON.stringify(queryStrCopy);//object to string ah paathiddam
        queryStr=queryStr.replace(/\b(gt|gte|lt|lte)/g,match=>`$${match}`)
         // { price: { $lt: '500', $gt: '1000' } } $ ah add pannanum
        


        this.query.find(JSON.parse);

       
        return this;
    }
}

module.exports=APIFeatures;