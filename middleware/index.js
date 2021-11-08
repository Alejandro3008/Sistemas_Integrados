module.exports = (req,resp,next) =>{
    return resp.status(200).json({code: 200, message: 'Bienvenido...'});
}