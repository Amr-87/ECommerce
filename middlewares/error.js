exports.errorMW = (err,req,res,nxt)=>{
    console.log(err.toString()); // 
    res.status(500).json({ error: err.toString() });
    
}