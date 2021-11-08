module.exports = (req,resp,next) =>{
    resp.header("Access-Control-Allow-Origin","*");
    resp.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method === 'OPTIONS'){
        resp.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return resp.status(200).json({});
    }
    next();
}