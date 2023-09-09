module.exports = reqFilter = (req, res, next)=>{
    if(!req.query.age){ // here we are taking the age as a request from the client and if the age is given and it should be above 18.
            res.send("please provide age");
    }else if(req.query.age < 18){
        res.send("you are not eligible")
    }
    else{
        next(); // it should be there at the last of the middleware for execute the code otherwise it will show an error.
    }
}
