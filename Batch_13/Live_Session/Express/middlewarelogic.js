module.exports = reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('<h1>Please enter your age</h1>')
    }
    else{
        next();
    }
}