exports.notFound = (req,res,nxt)=>{
    res.status(404).json({
        status: "fail",
        messege: `${req.originalUrl} is not found`
        })}
